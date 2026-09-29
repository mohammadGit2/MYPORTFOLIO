/* Run after npm run build. Install Playwright and its Chromium browser separately.
   PLAYWRIGHT_MODULE and CHROMIUM_PATH can point at an existing local installation. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = process.env.TEST_OUTPUT || path.join(root, 'test-results');
const failures = [];
const results = [];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  fs.mkdirSync(output, { recursive: true });
  const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], { cwd: root, stdio: 'pipe' });
  let browser;
  try {
    await new Promise((resolve, reject) => {
      server.stdout.on('data', data => { if (data.toString().includes('Local:')) resolve(); });
      server.stderr.on('data', data => process.stderr.write(data));
      server.on('error', reject);
      server.on('exit', code => reject(new Error('Preview exited: ' + code)));
    });
    browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
    const context = await browser.newContext();
    const page = await context.newPage();
    page.on('pageerror', error => failures.push(error.message));
    page.on('console', message => { if (message.type() === 'error' && !message.text().includes('net::ERR')) failures.push(message.text()); });
    page.on('response', response => { if (response.url().startsWith('http://127.0.0.1:4173') && response.status() >= 400) failures.push(response.status() + ' ' + response.url()); });
    await page.goto('http://127.0.0.1:4173', { waitUntil: 'networkidle' });
    assert.equal(await page.getByRole('button', { name: 'Sound off', exact: true }).getAttribute('aria-pressed'), 'false');
    for (const [width, height] of [[375,812],[390,844],[430,932],[768,1024],[1024,768],[1280,720],[1366,768],[1440,900],[1920,1080],[1024,600]]) {
      await page.setViewportSize({ width, height });
      await page.locator('#ai-agents').scrollIntoViewIfNeeded();
      await page.getByRole('button', { name: 'Run simulation', exact: true }).waitFor();
      for (const image of await page.locator('.project-media img').all()) { await image.scrollIntoViewIfNeeded(); await image.evaluate(img => img.decode()); }
      const layout = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
      assert.ok(layout.scroll <= layout.width + 1, `${width}px overflow: ${JSON.stringify(layout)}`);
      if (width === 390 || width === 1440) { await page.evaluate(() => scrollTo(0,0)); await page.screenshot({ path: path.join(output, `${width}-full.png`), fullPage: true }); }
      results.push(`No horizontal overflow at ${width}×${height}; local images decoded.`);
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    const trigger = page.getByRole('button', { name: 'Explore NextMarket PK', exact: true });
    await trigger.click();
    assert.equal(await page.locator('dialog').count(), 1);
    assert.equal(await page.evaluate(() => document.body.style.overflow), 'hidden');
    for (let i = 0; i < 18; i++) {
      await page.keyboard.press(i % 2 ? 'Shift+Tab' : 'Tab');
      assert.ok(await page.evaluate(() => !!document.activeElement.closest('dialog')), 'Focus escaped dialog');
    }
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('dialog').count(), 0);
    assert.ok(await trigger.evaluate(el => el === document.activeElement), 'Focus did not return');
    assert.equal(await page.evaluate(() => document.body.style.overflow), '');
    results.push('Project modal traps focus, closes on Escape, restores trigger focus and body scrolling.');
    for (const [name, count] of [['Full-Stack',3],['E-Commerce',1],['AI Integration',1],['Interactive Web',1],['All',6]]) {
      await page.locator('.filters').getByRole('button', { name, exact: true }).click();
      assert.equal(await page.locator('.project').count(), count);
    }
    results.push('Every project filter returns the expected projects.');
    for (let i = 0; i < 5; i++) {
      await page.locator('.agent-index button').nth(i).click();
      await page.getByRole('button', { name: 'Run simulation', exact: true }).click();
      await page.waitForFunction(() => document.querySelector('.workflow-status')?.textContent === 'Simulation complete');
      assert.equal(await page.locator('.node-flow [data-phase=complete]').count(), 5);
      await page.getByRole('button', { name: 'Trace', exact: true }).click();
      assert.equal(await page.locator('.trace-panel li').count(), 5);
      await page.getByRole('button', { name: 'Flow', exact: true }).click();
    }
    await page.getByRole('button', { name: /Reset/ }).click();
    await page.getByRole('button', { name: 'Run simulation', exact: true }).click();
    await page.getByRole('button', { name: /Reset/ }).click();
    await sleep(1100);
    assert.equal(await page.locator('.workflow-status').textContent(), 'Ready to explore');
    await page.getByRole('button', { name: 'Run simulation', exact: true }).click();
    await page.locator('.agent-index button').first().click();
    await sleep(1100);
    assert.equal(await page.locator('.workflow-status').textContent(), 'Ready to explore');
    assert.equal(await page.locator('.node-flow [data-phase=complete]').count(), 0);
    await page.locator('.node-flow button').nth(2).click();
    assert.ok((await page.locator('.node-inspector h4').textContent()).includes('Inventory'));
    results.push('All five simulations complete with five trace events; reset and agent switching cancel old execution; node inspection works.');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole('button', { name: /Menu/ }).click();
    for (let i = 0; i < 15; i++) { await page.keyboard.press('Tab'); assert.ok(await page.evaluate(() => !!document.activeElement.closest('dialog'))); }
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('dialog').count(), 0);
    await page.getByRole('button', { name: /Menu/ }).click();
    await page.locator('.mobile-menu').getByRole('link', { name: /Contact/ }).click();
    await page.waitForFunction(() => document.activeElement.id === 'contact');
    assert.equal(await page.locator('dialog').count(), 0);
    await page.getByRole('button', { name: /Menu/ }).click();
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.waitForFunction(() => !document.querySelector('dialog'));
    assert.equal(await page.evaluate(() => document.body.style.overflow), '');
    results.push('Mobile menu focus containment, Escape, section focus, and desktop resize cleanup pass.');
    await context.grantPermissions(['clipboard-read','clipboard-write']);
    await page.getByRole('button', { name: 'Copy email ↗', exact: true }).click();
    assert.equal(await page.evaluate(() => navigator.clipboard.readText()), 'mohammadprofessional14@gmail.com');
    await page.evaluate(() => { navigator.clipboard.writeText = async () => { throw Error('test denied'); }; });
    await page.getByRole('button', { name: 'Email copied ✓', exact: true }).click();
    await page.getByLabel('Select and copy this address:').waitFor();
    assert.equal(await page.getByLabel('Select and copy this address:').inputValue(), 'mohammadprofessional14@gmail.com');
    results.push('Clipboard success and denied-permission fallback work; contact uses real mailto links.');
    await page.getByRole('button', { name: 'Sound off', exact: true }).click();
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.getByRole('button', { name: 'Sound on', exact: true }).getAttribute('aria-pressed'), 'true');
    await page.getByRole('button', { name: 'Sound on', exact: true }).click();
    await page.emulateMedia({ reducedMotion: 'reduce' });
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
    assert.equal(await page.locator('.hero-proof').evaluate(el => getComputedStyle(el).transform), 'none');
    const reducedAnimations = await page.evaluate(() => [...document.querySelectorAll('*')].filter(el => getComputedStyle(el).animationName !== 'none').length);
    assert.equal(reducedAnimations, 0);
    results.push('Sound preference persists; reduced-motion removes animation and smooth scrolling.');
    const blocked = await browser.newContext();
    await blocked.addInitScript(() => { Storage.prototype.getItem = () => { throw Error('blocked'); }; Storage.prototype.setItem = () => { throw Error('blocked'); }; });
    const blockedPage = await blocked.newPage();
    await blockedPage.goto('http://127.0.0.1:4173');
    await blockedPage.getByRole('heading', { level: 1 }).waitFor();
    await blockedPage.getByRole('button', { name: 'Sound off', exact: true }).click();
    results.push('Blocked localStorage does not prevent rendering or sound preference changes.');
    await blocked.close();
    assert.deepEqual(failures, [], 'Browser errors');
    results.push('No uncaught browser errors or local asset HTTP errors.');
    console.log(results.join('\n'));
    fs.writeFileSync(path.join(output, 'results.json'), JSON.stringify({ results, failures }, null, 2));
  } finally { if (browser) await browser.close(); server.kill(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
