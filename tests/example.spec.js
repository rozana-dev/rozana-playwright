const { test, expect } = require('@playwright/test');

test('basic example test', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://example.com');

  // Check the page title
  await expect(page).toHaveTitle(/Example Domain/);

  // Check for some content on the page
  await expect(page.locator('h1')).toContainText('Example Domain');
});

test('interaction example', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://example.com');

  // Click on a link (if it exists)
  const moreInfoLink = page.locator('a[href*="iana.org"]');
  if (await moreInfoLink.isVisible()) {
    await moreInfoLink.click();
  }
});

