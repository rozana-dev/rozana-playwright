/**
 * Example test using custom fixtures
 * This demonstrates how to use fixtures for authentication and reusable test logic
 */

// Uncomment to use custom fixtures:
// const { test, expect } = require('../fixtures/custom-fixtures');

// Using standard fixtures:
const { test, expect } = require('@playwright/test');

test('example with helper utilities', async ({ page }) => {
  const { waitForNetworkIdle, waitAndClick } = require('../utils/helpers');
  
  await page.goto('https://example.com');
  await waitForNetworkIdle(page);
  
  // Example: Use helper function
  // await waitAndClick(page, 'button');
  
  await expect(page).toHaveTitle(/Example Domain/);
});

test('example with test data generation', async ({ page }) => {
  const { generateRandomEmail, generateRandomString } = require('../utils/helpers');
  
  const testEmail = generateRandomEmail();
  const testString = generateRandomString();
  
  console.log(`Generated email: ${testEmail}`);
  console.log(`Generated string: ${testString}`);
  
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

