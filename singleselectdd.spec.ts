import {test,expect,Locator} from '@playwright/test'
test("Single select dropdown",async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#country').selectOption("#India")
    // await page.locator('#country').selectOption({value:"uk"})
    // await page.locator('#country').selectOption({label:"India"})

    // //count
    const ddcount:Locator=page.locator("#country>option")
    await expect(ddcount).toHaveCount(10)
    //check option
    const optiontext:string[]=(await ddcount.allTextContents()).map(text=>text.trim())
    console.log(optiontext);
    
    await expect(optiontext).toContain("Japan")
    //printing
    for(const o of optiontext){
        console.log(o);
        

    }



await page.waitForTimeout(5000)
})