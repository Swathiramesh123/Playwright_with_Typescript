import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).dblclick();
  await page.getByRole('textbox', { name: 'Password:' }).fill('swa123');
  await page.getByRole('button', { name: 'Log in' }).dblclick();
  await page.getByRole('link', { name: 'Register' }).dblclick();
});