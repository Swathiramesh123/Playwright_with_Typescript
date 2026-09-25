import {test,expect} from "@playwright/test";
 test("verify title",async ({page})=>{
  await page.goto("https://www.saucedemo.com/")
   let url:string=await page.url();
   console.log("url",url);
  await expect(page).toHaveURL(/saucedemo/)
  
})