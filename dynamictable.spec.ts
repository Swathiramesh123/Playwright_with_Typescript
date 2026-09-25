import {test,expect,Locator} from '@playwright/test'
test("dynamic tables",async({page})=>{
    await page.goto("https://practice.expandtesting.com/dynamic-table");
    const table:Locator=page.locator("table.table tbody")
    await expect(table).toBeVisible();
    const rows:Locator[]=await table.locator('tr').all()
    console.log("No of rows",rows.length);
    expect(rows).toHaveLength(4);
    //CPU
    let cpu=''
    for(let r of rows){
        const proces:string=await r.locator('td').nth(0).innerText()
        if(proces==='Chrome'){
            cpu=await r.locator('td:has-text("%")').innerText()
            console.log("CPU log:",cpu);
            break;
            
        }
    }
//yellow text
    let yel:string=await page.locator("#chrome-cpu").innerText()
    console.log("yellow text:",yel);
    if(yel.includes(cpu)){
        console.log("equal");
        
    }
    else{
        console.log("break");
        
    }
    expect(yel).toContain(cpu)



    await page.waitForTimeout(5000)

})
   