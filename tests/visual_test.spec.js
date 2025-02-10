import { test, expect } from '@playwright/test';

const base_url = process.env.BASE_URL || 'https://playwright.dev/';

test('visual test', async ({ page }) => {
    await page.goto(base_url);

    // Take a screenshot of the full page.
    await expect(page).toHaveScreenshot(['homepage.png'], {maxDiffPixels: 100});
});