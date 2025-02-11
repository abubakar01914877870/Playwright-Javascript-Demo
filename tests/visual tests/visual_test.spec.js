import { test, expect } from '@playwright/test';

const base_url = process.env.BASE_URL || 'https://playwright.dev/';

test('visual test 1', async ({ page }) => {
    await page.goto(base_url);

    // Take a screenshot of the full page.
    await expect(page).toHaveScreenshot(['homepage.png'], {maxDiffPixels: 100});
});

test('visual test 2', async ({ page }) => {
    await page.goto(base_url + 'docs/intro');

    // Take a screenshot of the full page.
    await expect(page).toHaveScreenshot({maxDiffPixels: 100});
});