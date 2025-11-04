/**
 * Helper utility functions for Playwright tests
 */

/**
 * Wait for network to be idle
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {number} timeout - Timeout in milliseconds
 */
async function waitForNetworkIdle(page, timeout = 30000) {
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Take a screenshot with timestamp
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} name - Screenshot name
 */
async function takeScreenshot(page, name) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  await page.screenshot({ path: `screenshots/${name}-${timestamp}.png` });
}

/**
 * Wait for element to be visible and clickable
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {number} timeout - Timeout in milliseconds
 */
async function waitAndClick(page, selector, timeout = 10000) {
  await page.waitForSelector(selector, { state: 'visible', timeout });
  await page.click(selector);
}

/**
 * Fill form field with retry
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {string} selector - Input selector
 * @param {string} value - Value to fill
 * @param {number} retries - Number of retries
 */
async function fillWithRetry(page, selector, value, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      await page.fill(selector, value);
      return;
    } catch (error) {
      if (i === retries - 1) throw error;
      await page.waitForTimeout(1000);
    }
  }
}

/**
 * Generate random email
 * @returns {string} Random email address
 */
function generateRandomEmail() {
  const timestamp = Date.now();
  return `test-${timestamp}@example.com`;
}

/**
 * Generate random string
 * @param {number} length - String length
 * @returns {string} Random string
 */
function generateRandomString(length = 10) {
  return Math.random().toString(36).substring(2, length + 2);
}

module.exports = {
  waitForNetworkIdle,
  takeScreenshot,
  waitAndClick,
  fillWithRetry,
  generateRandomEmail,
  generateRandomString,
};

