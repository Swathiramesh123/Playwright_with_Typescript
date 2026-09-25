import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Books' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Computers' }).first().click();
  await page.getByRole('link', { name: 'Books' }).nth(1).click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - listitem:
      - link "Books":
        - /url: /books
    `);
});