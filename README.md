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
├── tests/                    # Test files directory
│   ├── example.spec.js       # Basic example test
│   └── example-with-fixtures.spec.js # Example using fixtures
├── fixtures/                  # Custom test fixtures
│   └── custom-fixtures.js    # Reusable test fixtures
├── utils/                     # Helper utilities
│   └── helpers.js            # Utility functions
├── global-setup.js            # Runs once before all tests
├── global-teardown.js         # Runs once after all tests
├── playwright.config.js       # Playwright configuration
├── package.json               # Node.js project configuration
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
└── README.md                 # This file
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

# Generate test code using Playwright Codegen
npm run test:codegen

# Reinstall Playwright browsers
npm run test:install
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
- Timeouts and retries (default: 30s test timeout, 5s expect timeout)
- Base URL
- Reporter settings
- Global setup and teardown

### Timeouts

- **Test timeout**: 30 seconds (maximum time a test can run)
- **Expect timeout**: 5 seconds (maximum time for assertions)

These can be overridden per test or in the configuration file.

### Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your environment variables in `.env`

3. Environment variables can be accessed in tests using `process.env.VARIABLE_NAME`

### Global Setup and Teardown

- **`global-setup.js`**: Runs once before all tests. Use for:
  - Setting up test databases
  - Authenticating users
  - Pre-populating test data
  - Starting servers

- **`global-teardown.js`**: Runs once after all tests. Use for:
  - Cleaning up test databases
  - Stopping servers
  - Removing test data

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

## Failure Artifacts

When tests fail, Playwright automatically captures:

- **Videos**: Full video recording of the test execution (saved in `test-results/`)
- **Traces**: Interactive trace files that allow you to step through the test execution (saved in `test-results/`)
- **Screenshots**: Screenshots at the moment of failure (saved in `test-results/`)

These artifacts are automatically included in the HTML report and can be viewed by:
1. Running `npm run test:report` to open the HTML report
2. Clicking on a failed test to see videos, traces, and screenshots
3. Using the trace viewer: `npx playwright show-trace <trace-file>`

**Note**: Artifacts are only captured for failed tests to save disk space. Successful tests do not generate these artifacts.

## Advanced Features

### Custom Fixtures

Fixtures allow you to extend the test object with custom functionality. See `fixtures/custom-fixtures.js` for examples.

Example usage:
```javascript
const { test, expect } = require('../fixtures/custom-fixtures');

test('using authenticated page', async ({ authenticatedPage }) => {
  await authenticatedPage.goto('/dashboard');
  // Page is already authenticated
});
```

### Helper Utilities

Reusable utility functions are available in `utils/helpers.js`:

- `waitForNetworkIdle()` - Wait for network to be idle
- `takeScreenshot()` - Take screenshot with timestamp
- `waitAndClick()` - Wait for element and click
- `fillWithRetry()` - Fill form field with retry logic
- `generateRandomEmail()` - Generate random email
- `generateRandomString()` - Generate random string

Example usage:
```javascript
const { waitForNetworkIdle, generateRandomEmail } = require('../utils/helpers');

test('example', async ({ page }) => {
  await page.goto('https://example.com');
  await waitForNetworkIdle(page);
  const email = generateRandomEmail();
});
```

### Code Generation

Generate test code by recording your interactions:

```bash
npm run test:codegen
```

This opens a browser where you can interact with your application, and Playwright will generate the corresponding test code.

### CI/CD Integration

A GitHub Actions workflow is included in `.github/workflows/playwright.yml` that:
- Runs tests on push and pull requests
- Installs Playwright browsers
- Uploads test reports as artifacts

For other CI/CD platforms, see [Playwright CI/CD documentation](https://playwright.dev/docs/ci).

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

