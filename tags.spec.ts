import {test,expect} from '@playwright/test'
test('Check title of the home page',
    { tag: '@sanity' },
    async ({ page }) => {

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});
test('Check navigation to Store page',
    { tag: '@regression' },
    async ({ page }) => {

    await page.goto('https://www.google.com/');
    await page.locator("text='Store'").click();

    await expect(page).toHaveTitle(
        'Google Store for Google Made Devices & Accessories'
    );
});
test('Check top recommendations',
    { tag: ['@sanity', '@regression'] },
    async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.getByText('Store', { exact: true }).click();

    await expect(page).toHaveTitle(
        'Google Store for Google Made Devices & Accessories'
    );
});