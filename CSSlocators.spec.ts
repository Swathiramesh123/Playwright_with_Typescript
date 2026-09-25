import {test,expect,Locator} from '@playwright/test'
test("css locator demo",async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
//await page.locator("input#small-searchterms").fill("T-shirts")
//await page.locator("input.search-box-text").fill("T-shirts")
//await page.locator("input[name='q']").fill("T-shirts")
await page.locator(' .search-box-text[value="Search store"]').fill("T-shirts")

})