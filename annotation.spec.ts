import { test,expect } from "@playwright/test";

//import (test,expect )
test('test1', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

test.fail('test2', async ({ page }) => {
    await page.goto('https://www.google.com/');
});
test.fixme('test3', async ({ page }) => {
    await page.goto('https://www.google.com/');
});
test.skip('test4', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});
test('tes51', async ({ page,browserName}) => {
    test.skip(browserName==='chromium',"test skipped")
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});