const { chromium } = require('playwright');

(async () => {
  const url = process.argv[2];
  const outPath = process.argv[3];
  const width = parseInt(process.argv[4] || '1440', 10);
  const height = parseInt(process.argv[5] || '900', 10);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto(url, { waitUntil: 'networkidle' });

  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 60);
    });
  });
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);

  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
})();
