import {test,expect,Locator,Page} from '@playwright/test'
async function selectp(tyear:string,tmonth:string,tdate:string,page:Page,isFuture:boolean){
    while(true){
        const currentm=await page.locator(".ui-datepicker-month").textContent()
        const curyear=await page.locator(".ui-datepicker-year").textContent()
        if(currentm==tmonth&&curyear==tyear){
            break
        }
        //future
        await page.locator(".ui-datepicker-next").click()
    }
        const alldate=await page.locator(".ui-datepicker-calendar td").all();
        for(let d of alldate){
            const dt=await d.innerText()
            if(dt===tdate){
            await  d.click()
            break

            }
        }

}
test("jquer date picker",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
    const dataInput:Locator= page.locator("#datepicker")
    await expect(dataInput).toBeVisible();
    await dataInput.click();
    // dataInput.fill("09/10/2026")
    //await page.waitForTimeout(5000)
    const year='2027'
    const month='September'
    const date='15'
    
       await selectp(year,month,date,page,true)
        const exdate='09/15/2027'
        await expect(dataInput).toHaveValue(exdate)

    
    await page.waitForTimeout(5000)
})