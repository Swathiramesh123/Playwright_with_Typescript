import {test,expect,Locator} from '@playwright/test'
test("hard methods",async({page})=>{
 
 await page.goto("https://demowebshop.tricentis.com/")
//  await expect(page).toHaveTitle("Demo Web shop1")
//  console.log(("after titlt1"));
 
//  await expect(page).toHaveURL("https://demowebshop.tricentis.com/")
//  const logo= page.locator("img[alt='Tricentis Demo Web Shop']")
//  await expect(logo).toBeVisible();

//soft
await expect.soft(page).toHaveTitle("t")
console.log("after titlt 2");

 await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/")
 const logo= page.locator("img[alt='Tricentis Demo Web Shop']")
 console.log("after imd:");
 
 await expect.soft(logo).toBeVisible();
await page.waitForTimeout(5000);
})