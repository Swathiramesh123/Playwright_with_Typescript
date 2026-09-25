import {test,expect,Locator} from '@playwright/test'
test("cauto wait",async({page})=>{
 // await page.goto("https://demowebshop.tricentis.com/")
 //test.setTimeout(5000)
 await page.goto("https://demowebshop.tricentis.com/")
// await expect(page).toHaveURL("https://demowebshop.tricentis.com/",{timeout:10000})
//await expect(page.locator("text= Welcome to our store")).toBeVisible({timeout:1000})
 await page.locator("#small-searchterms").fill("Laptop",{force:true})
 await page.locator(".button-1 search-box-button").click({force:true})

})