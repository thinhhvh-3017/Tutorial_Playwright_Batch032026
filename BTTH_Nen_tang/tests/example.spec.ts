import { test, expect } from '@playwright/test';

test('Access to W3Schools', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');

  // Search for "SQL" in the search input field
  const searchInput = page.locator('#tnb-google-search-input');
  await searchInput.fill('SQL');

  // Press Enter to perform the search
  await searchInput.press('Enter');

  console.log('Test case is passed');
});
