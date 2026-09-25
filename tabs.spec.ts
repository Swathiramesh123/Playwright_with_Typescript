import { expect,test,Locator,Page, chromium } from "@playwright/test";
test(" browser context",async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext()
    const Parpage=await context.newPage();
await Parpage.goto("https://testautomationpractice.blogspot.com/")
const [childPage]=await Promise.all([context.waitForEvent('page'),Parpage.locator("button:has-text('New Tab')").click()])
const page=context.pages()
console.log("no of pages",page.length);
console.log("pp:",await page[0].title());
console.log("child:",await page[1].title());
console.log("parent:",await Parpage.title());
console.log("child:",await childPage.title());

})