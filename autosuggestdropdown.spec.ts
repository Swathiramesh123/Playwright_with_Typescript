import {test,expect,Locator} from '@playwright/test'
test("auto suggest dropdown",async({page})=>{
await page.goto("https://www.flipkart.com/")
//await page.locator("input[name='q']").fill("smart");
await page.locator("input[name='q']:not([readonly])").fill("smart");

 const closeButton = page.getByRole("button", { name: "X" });

if (await closeButton.isVisible()) {
    await closeButton.click();
}


//await page.locator("input[name='q']:not([readonly])").fill("smart");

   await  page.waitForTimeout(5000);
 const options:Locator=page.locator("ul>li")
 const count= await options.count()
   console.log("no of suggested count",count);
  await page.waitForTimeout(5000)
  //print all

  console.log(("print all options:"));
  for(let i=0;i<count;i++){
    console.log(await options.nth(i).textContent());
    
  }
  //select smartphone option
  for(let i=0;i<count;i++){
    const text=await options.nth(i).textContent()
    if(text==='smartphone'){
      await  options.nth(i).click();
        break
    }

  }
await page.waitForTimeout(5000)
   
})