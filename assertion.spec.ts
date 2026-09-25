import {test,expect,Locator} from '@playwright/test'
test("assertion methods",async({page})=>{
 
 await page.goto("https://demowebshop.tricentis.com/")
 await expect(page).toHaveURL("https://demowebshop.tricentis.com/")
 await expect(page.locator("text= Welcome to our store")).toBeVisible()
 await expect(page.locator("div[class='product-grid home-page-product-grid'] strong")).toHaveText("Featured products")
//no retry
const title=await page.title()
expect(title.includes("Demo Web Shop")).toBeTruthy();
const wlcm=await page.locator("text= Welcome to our store").textContent()
expect(wlcm).toContain("Welcome")
await page.waitForTimeout(5000);
})