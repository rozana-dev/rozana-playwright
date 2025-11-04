/**
 * Custom fixtures for Playwright tests.
 * Fixtures allow you to extend the test object with custom functionality.
 * See: https://playwright.dev/docs/test-fixtures
 */

const { test as base } = require('@playwright/test');

/**
 * Extend base test with custom fixtures
 */
exports.test = base.extend({
  // Example: Custom authenticated page
  authenticatedPage: async ({ page }, use) => {
    // Perform authentication here
    // await page.goto('/login');
    // await page.fill('#username', process.env.TEST_USERNAME);
    // await page.fill('#password', process.env.TEST_PASSWORD);
    // await page.click('button[type="submit"]');
    // await page.waitForURL('/dashboard');
    
    await use(page);
  },

  // Example: Custom API context
  apiContext: async ({ request }, use) => {
    // Set up API authentication headers
    // await request.setExtraHTTPHeaders({
    //   'Authorization': `Bearer ${process.env.API_TOKEN}`
    // });
    
    await use(request);
  },

  // Example: Custom test data
  testData: async ({}, use) => {
    // Generate or load test data
    const data = {
      username: 'testuser',
      email: 'test@example.com',
      // Add more test data as needed
    };
    
    await use(data);
  },
});

exports.expect = require('@playwright/test').expect;

