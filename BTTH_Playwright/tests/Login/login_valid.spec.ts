import { test, expect } from '@playwright/test';

test.describe('Flow Login Valid - SauceDemo', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // TCs 1.1: Login successfully with valid credentials
  test('Login successfully with valid credentials', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Redirect to inventory page after login successfully
    await expect(page).toHaveURL(/.*inventory.html/);
    
    // Title và inventory list are visible on inventory page
    const title = page.locator('.title');
    await expect(title).toHaveText('Products');
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

});