import { test, expect } from '@playwright/test';

test('Tutorial: Fill Registration Form and Verify Data', async ({ page }) => {
  const testData = {
    username: 'ho van hung thinh',
    email: 'ho.van.hung.thinh@example.com',
    dob: '1990-10-25',
    interestValue: 'technology',
    countryValue: 'Canada'
  };

  // Access to the registration page
  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

  // Action: Input data into form fields
  
  // Textbox
  await page.locator('//input[@id="username"]').fill(testData.username);
  await page.locator('//input[@id="email"]').fill(testData.email);

  // Radio button
  const maleRadio = page.locator('//input[@id="male"]');
  await maleRadio.check();

  // Checkbox
  const readingCheckbox = page.locator('//input[@id="reading"]');
  await readingCheckbox.check();
  await page.locator('//input[@id="traveling"]').check();

  // Dropdown / Select Option
  await page.locator('//select[@id="interests"]').selectOption(testData.interestValue);
  await page.locator('//select[@id="country"]').selectOption(testData.countryValue);

  // Date input 
  await page.locator('//input[@id="dob"]').fill(testData.dob);

  //  Assertion: Check data after input
  // Verify Radio và Checkbox 
  await expect(maleRadio).toBeChecked();
  await expect(readingCheckbox).toBeChecked();

  // Submit form
  await page.locator('//button[normalize-space()="Register"]').click();

  // Assertion: Verify data after submission
  // Find row in table
  const newRow = page.locator('//tbody/tr', { hasText: testData.username });

  // TCs 1: New row is exsisted after submit form
  await expect(newRow).toBeVisible();

  // TCs 2: Verify data in new row
  await expect(newRow.locator('//td').filter({ hasText: testData.email })).toBeVisible();
});