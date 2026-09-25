import {test,expect,Locator} from '@playwright/test'
test("XPath demo in playwright",async({page})=>{
   await page.goto("https://demowebshop.tricentis.com/")
//    const ablogo:Locator= page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img")
//    await expect(ablogo).toBeVisible();
//    const logo:Locator= page.locator("//img[@alt='Tricentis Demo Web Shop']")
//    await expect(logo).toBeVisible();

 //const products:Locator=page.locator("//h2/a[contains(@href,'computer')]")
 //const pcount:Number=await products.count();
 //console.log("computer related products",pcount);
 

 //expect(pcount).toBeGreaterThan(0);
//  
// const first:Locator=page.locator("//a[text()='Register']")
// await expect(first).toBeVisible();
// console.log("first element",await first.textContent());

//  const last:Locator=page.locator('//div[@class="column follow-us"]//li[last()]')
//  await expect(last).toBeVisible();
//  console.log("last element",await last.textContent());
//  const post:Locator=page.locator('//div[@class="column follow-us"]//li[position()=3]')
//  await expect(last).toBeVisible();
//  console.log("post element",await post.textContent());
 

 
})