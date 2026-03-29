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

  test('Bài 3: Cập nhật số lượng item trên icon giỏ hàng', async ({ page }) => {
    const cartBadge = page.locator('.shopping_cart_badge');
    
    const addToCartButtons = page.locator('.btn_inventory');

    // Add the first product to the cart
    await addToCartButtons.first().click();
    
    // Test UI state: Number on card icon should be 1
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');

    // Add the second product to the cart
    await addToCartButtons.nth(1).click();      
    
    // Test UI state: Number on card icon should be 2
    await expect(cartBadge).toHaveText('2');
  });
});
