import { test, expect } from '@playwright/test';

test.describe('Kịch bản Login Invalid - SauceDemo', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

    // TCs 1.2: Login failed with wrong password
  test('Login failed with wrong password', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();

    // Displays error message when login failed
    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toContainText('Username and password do not match any user in this service');
  });

  // TCs 1.3 Login failed when username is empty
  test('Login failed when username is empty', async ({ page }) => {
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Displays error message when login failed
    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toContainText('Username is required');
  });

  // TCs 1.4 Login with locked user      
  test('Login failed with locked user (locked_out_user)', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Displays error message when login failed
    const errorMsg = page.locator('[data-test="error"]');
    await expect(errorMsg).toContainText('Sorry, this user has been locked out');
  });
});