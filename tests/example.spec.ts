import { test, expect } from '@playwright/test';

test('Demo Login1', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');

  //await page.pause();

  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('aa@aa.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('123456');
  await page.getByRole('link', { name: 'Sign in' }).click();

  // Wait for navigation to the dashboard page after login
  await expect(page).toHaveURL('https://demo.applitools.com/app.html');

  await page.pause();
  // Check for successful login by verifying the presence of the 'Your account' heading
  //await expect(page.getByRole('heading', { name: 'Your account' })).toBeVisible();
  await page.close();
  // ---------------------
  //await context.close();
  //await browser.close();  
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/