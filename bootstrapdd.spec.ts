import {test,expect,Locator} from '@playwright/test'
test("bootstap dropdown",async({page})=>{
  await  page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await  page.locator("input[name='username']").fill("Admin")
  await  page.locator("input[name='password']").fill("admin123")
  await page.locator("button[type='submit']").click()
  await page.getByText("PIM").click()
  await page.locator('form i').nth(2).click()
  await page.waitForTimeout(3000)
  const option=await page.locator('div[role="listbox"] span')
  const count=await option.count();
  console.log("count of option:",count);
  
  console.log("print option:");
   for(let i=0;i<count;i++){
    console.log(await option.nth(i).textContent());
    
  }
    //select automation option
  for(let i=0;i<count;i++){
    const text=await option.nth(i).textContent()
    if(text==='Automaton Tester'){
       await option.nth(i).click();
        break
    }

  }
await page.waitForTimeout(5000)
  
})