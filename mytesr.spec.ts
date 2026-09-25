import {test,expect} from "@playwright/test";
 test("verify title",async ({page})=>{
  await page.goto("https://www.saucedemo.com/")
   let title:string=await page.title();
   console.log("title",title);
  await expect(page).toHaveTitle("Swag Labs")
  
})