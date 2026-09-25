import { expect,test,Locator,Page, chromium } from "@playwright/test";
test("authenticate popup",async({browser})=>{
   // const browser=await chromium.launch();
    //const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
    const context=await browser.newContext()
    const page=await context.newPage();
await page.goto(
  "http://admin:admin@the-internet.herokuapp.com/basic_auth"
);
await page.waitForLoadState()
await expect(page.locator("text=Congratulations")).toBeVisible()
await page.waitForTimeout(5000)




})