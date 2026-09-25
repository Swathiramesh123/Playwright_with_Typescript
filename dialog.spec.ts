import {test,expect,Locator} from '@playwright/test'
test(" alert dialog ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(dialog)=>{
        console.log("dialogue type:",dialog.type());
        expect(dialog.type()).toContain('alert')
        console.log("dialogue msg:",dialog.message());
        expect(dialog.message()).toContain('I am an alert box')
       // dialog.accept()
       dialog.dismiss()
        
        

    })
    await page.locator('#alertBtn').click();
    await page.waitForTimeout(5000)
    
})
test.only("prompt dialog ",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(dialog)=>{
        console.log("dialogue type:",dialog.type());
        expect(dialog.type()).toContain('prompt')
        console.log("dialogue msg:",dialog.message());
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain("Harry Potter")
        dialog.accept("Jhon")
       //dialog.dismiss()
        
        

    })
    await page.locator('#promptBtn').click();
    const text:string=await page.locator("#demo").innerText();
    console.log("Output text",text);
  await expect(page.locator("#demo")).toHaveText("Hello Jhon! How are you today?")  
    await page.waitForTimeout(5000)
    
})