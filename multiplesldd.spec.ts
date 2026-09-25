import {test,expect,Locator} from '@playwright/test'
test("Multiple select  dropdown",async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#color').selectOption(["Red","White"])
    // await page.locator('#color').selectOption({value:"green"},{value:"red"})
    //await page.locator('#color').selectOption({label:"green"},{label:"red"})

    // //count
    const ddcount:Locator=page.locator("#color>option")
    await expect(ddcount).toHaveCount(7)
    //check option
    const optiontext:string[]=(await ddcount.allTextContents()).map(text=>text.trim())
    console.log(optiontext);
    
    await expect(optiontext).toContain("Green")
    //printing
    for(const o of optiontext){
        console.log(o);
        }
})