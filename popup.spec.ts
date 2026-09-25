import { expect,test,Locator,Page, chromium } from "@playwright/test";
test("handle popup",async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext()
    const page=await context.newPage();
await page.goto("https://testautomationpractice.blogspot.com/")
 await Promise.all([page.waitForEvent("popup"),page.locator("#PopUp").click()])
const poppage=context.pages()
console.log(" no of length:",poppage.length);
console.log(poppage[0].url());
console.log(poppage[1].url());
console.log(poppage[2].url());

for(let pw of poppage){
    const title=await pw.title()
    if(title.includes('Playwright')){
        await pw.locator(".getStared_Sjon").click()
        await page.waitForTimeout(5000)
        await pw.close()
    }
}



})