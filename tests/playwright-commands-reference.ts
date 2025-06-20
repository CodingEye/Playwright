// Playwright Common Commands Reference
// -----------------------------------

// 1. Assertions
// Use expect to assert conditions in your tests
// Example: await expect(page).toHaveURL('https://example.com');
import { expect, Page } from '@playwright/test';

// 2. Locators and Interactions
// Use page.getByRole, page.getByText, etc., to locate elements
// Example: await page.getByRole('button', { name: 'Submit' }).click();

// 3. Navigation
// await page.goto('https://example.com'); // Navigate to a URL

// 4. Filling Forms
// await page.fill('input[name="username"]', 'myuser'); // Fill input
// await page.type('input[name="password"]', 'mypassword'); // Type input

// 5. Clicking Elements
// await page.click('button[type="submit"]'); // Click a button

// 6. Waiting
// await page.waitForSelector('div.result'); // Wait for selector
// await page.waitForTimeout(2000); // Wait for 2 seconds

// 7. Screenshots
// await page.screenshot({ path: 'screenshot.png' }); // Take screenshot

// 8. Page Events
// page.on('dialog', dialog => dialog.accept()); // Handle dialogs

// 9. Keyboard and Mouse
// await page.keyboard.press('Enter'); // Press a key
// await page.mouse.click(100, 200); // Click at coordinates

// 10. Multiple Pages/Tabs
// const [newPage] = await Promise.all([
//   context.waitForEvent('page'),
//   page.click('a[target="_blank"]'),
// ]);

// 11. File Upload
// await page.setInputFiles('input[type="file"]', 'path/to/file.txt');

// 12. Download Handling
// const [ download ] = await Promise.all([
//   page.waitForEvent('download'),
//   page.click('a#download'),
// ]);
// await download.saveAs('downloaded.txt');

// 13. Frames
// const frame = page.frame({ name: 'my-frame' });
// await frame.click('button');

// 14. Network Interception
// await page.route('**/api/**', route => route.abort());

// 15. Emulate Devices
// await context.newPage({ ...devices['iPhone 11'] });

// 16. Evaluate JavaScript
// const result = await page.evaluate(() => window.location.href);

// 17. Cookies and Storage
// const cookies = await context.cookies();
// await context.addCookies([{ name: 'token', value: 'abc', domain: 'example.com', path: '/' }]);

// 18. Closing
// await page.close();
// await context.close();
// await browser.close();

// 19. Debugging
// await page.pause(); // Pause for debugging

// 20. Test Hooks
// test.beforeEach(async ({ page }) => { ... });
// test.afterEach(async ({ page }) => { ... });

// For more, see: https://playwright.dev/docs/api/class-page

//-------------------------
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
