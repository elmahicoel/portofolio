import puppet from 'puppeteer';

(async () => {
  const browser = await puppet.launch(
    // {
    // headless: false, // The browser is visible
    // ignoreHTTPSErrors: true,
    // args: [`--window-size=1,1`] // new option
    // }
  );
  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.digi24.ro/');
  const textArray = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("h2"))
      
      // .map(text => text.textContent!.trim()) // !! - Non-null assertion operator
      // .filter(text => text.startsWith('Borcea'));
  }); 

  // await page.screenshot({path: 'example.png'});
  await browser.close();
})();
