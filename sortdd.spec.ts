import {test,expect,Locator} from '@playwright/test'
test("Sort dropdown",async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/")
    const ddcount:Locator=page.locator("#color>option")
       // const ddcount:Locator=page.locator("#country>option")

    
    const optiontext:string[]=(await ddcount.allTextContents()).map(text=>text.trim())
    const original:string[]=[...optiontext]
    const sorted:string[]=[...original].sort();
    console.log("original text :",original);
    console.log("sorted text:",sorted);
    await expect(original).toEqual(sorted)
    
    

})