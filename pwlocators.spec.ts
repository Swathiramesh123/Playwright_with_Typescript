import {test,expect,Locator} from '@playwright/test'
test("Verify Playwright locators",async({page})=>{
//await page.goto("https://demo.nopcommerce.com/")
//  const logo:Locator=page.getByAltText("nopCommerce demo store")
//  await expect(logo).toBeVisible();
//  await expect(page.getByText("Welcome to our store")).toBeVisible();
 //  await page.goto("https://the-internet.herokuapp.com/login");
//  await page.getByRole("textbox", { name: "Username" }).click();

// await expect(username).toBeVisible();
// await page.getByLabel("Username").fill("Swathi");
// await page.getByLabel("Password").fill("1234");
// await page.goto("https://practice.expandtesting.com/form-validation")
// await page.getByPlaceholder("012-3456789").fill("984387621")
await page.goto("file:///C:/Users/pavan/OneDrive/Desktop/playwrightlocators.html");
await expect(page.getByTitle("Home page link")).toHaveText("Home");


})