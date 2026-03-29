import { test, expect } from '@playwright/test';

test.describe('Bài 3: Kiểm tra trạng thái giỏ hàng', () => {

  // Login successfully 
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test('Bài 4: Flow Logout hệ thống', async ({ page }) => {
    // Open side bar menu
    await page.locator('#react-burger-menu-btn').click();

    // Click Logout
    await page.locator('#logout_sidebar_link').click();

    // Test UI state: Redirect to login page after logout successfully
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    
    // Test UI state: Login button should be visible after logout successfully
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});