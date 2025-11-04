# Rozana Playwright Testing Environment

This project contains an end-to-end testing setup using Playwright and Node.js.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

## Initial Setup

Follow these commands to set up the Playwright environment from scratch:

### 1. Initialize Node.js Project

```bash
npm init -y
```

This creates a `package.json` file with default settings.

### 2. Install Playwright

```bash
npm install --save-dev @playwright/test
```

This installs Playwright as a development dependency.

### 3. Install Playwright Browsers

```bash
npx playwright install
```

This downloads the necessary browser binaries (Chromium, Firefox, WebKit) for testing.

### 4. Verify Installation

```bash
npm test
```

This runs the example tests to verify everything is set up correctly.

## Project Structure

```
rozana-playwright/
├── tests/              # Test files directory
│   └── example.spec.js # Example test file
├── playwright.config.js # Playwright configuration
├── package.json        # Node.js project configuration
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Available Commands

### Run Tests

```bash
# Run all tests
npm test

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# Show HTML test report
npm run test:report
```

## Writing Tests

Tests are located in the `tests/` directory. Create new test files with the `.spec.js` extension.

Example test structure:

```javascript
const { test, expect } = require('@playwright/test');

test('your test name', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

## Configuration

The Playwright configuration is in `playwright.config.js`. You can customize:

- Test directory
- Browser projects
- Parallel execution settings
- Timeouts and retries
- Base URL
- Reporter settings

## Browser Support

The project is configured to run tests on:
- **Chromium** (Chrome/Edge)
- **Firefox**
- **WebKit** (Safari)

## Test Reports

After running tests, you can view the HTML report by running:

```bash
npm run test:report
```

This opens an interactive HTML report showing test results, screenshots, and traces.

## Troubleshooting

### If browsers are not installed

```bash
npx playwright install
```

### If you need to install system dependencies

```bash
npx playwright install-deps
```

### To run tests in a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Documentation

For more information, visit the [Playwright Documentation](https://playwright.dev/).

