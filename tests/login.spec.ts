import { test, expect } from "@playwright/test";

// Environment variables are already loaded by playwright.config.js
const username = process.env.USERNAME || 'Macha';
const password = process.env.PASSWORD || 'Rozana@@1';
const baseUrl = process.env.BASE_URL || 'https://rzn1.stockone.com/v2/#/';  
test.describe.serial('Neo ASN checking', () => {
    test('User activation and deactivatio from neo stores', async ({ page }) => {
        await page.goto(baseUrl);
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill(username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(password);
        await page.getByRole('button', { name: 'Sign In' }).click();

    });
});