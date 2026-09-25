import {test,expect,Locator} from '@playwright/test'
test("pagination tables",async({page})=>{
   await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
    let hasMorePage=true;
    while(hasMorePage){
        const rows= await page.locator("#example tbody tr").all()
        for(let r of rows){
            console.log(await r.innerText());
            
        }
        await page.waitForTimeout(5000)
        const nextButton=await page.locator('button[aria-label="Next"]')
        const isdisabled=await nextButton.getAttribute("class")
        if(isdisabled?.includes('disabled')){
            hasMorePage=false
        }
        else{
            await nextButton.click();
        }
    }
})

test("filter tables",async({page})=>{
   await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
   const dropdown=page.locator("#dt-length-0")
   await dropdown.selectOption({label:'25'})
   const row=await page.locator("#example tbody tr")
   await expect(row).toHaveCount(25)
})


test.only("search tables",async({page})=>{
   await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html")
   const search:Locator=page.locator("#dt-search-0")
   await search.fill("Paul Byrd")
   const rows=await page.locator('#example tbody tr').all()
   if(rows.length>=1){
    for(let r of rows){
        const text=await r.innerText()
        if(text.includes("Paul Byrd")){
            console.log("record found");
            break
            
        }
    }
   }
   else{
    console.log("Not found");
    
   }
})