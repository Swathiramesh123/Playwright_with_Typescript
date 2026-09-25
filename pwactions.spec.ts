import {test,expect,Locator} from '@playwright/test'
test("Playwright actions",async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/")
   const textBox:Locator= page.locator("#name")
   await expect(textBox).toBeVisible();
   await expect(textBox).toBeEnabled();
   const maxLength:string | null=await textBox.getAttribute("maxlength");
   expect(maxLength).toBe('15')
   
   //textbox
   await textBox.fill("Swathi");
   const enteredValue:string=await textBox.inputValue();
   console.log("entered value : ",enteredValue);
   await expect(enteredValue).toBe("Swathi");
   

  await page.waitForTimeout(3000);  
})
test("Radiobutton actions",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   const maleRadio:Locator= page.locator("#male");
   await expect(maleRadio).toBeVisible();
   await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false)
    await maleRadio.check();
   await expect(maleRadio).toBeChecked()
   await page.waitForTimeout(3000);  
})
test.only("CheckBox actions",async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/")
//    const sundayC:Locator= page.getByLabel("Sunday")
//    await sundayC.check()
//    await expect(sundayC).toBeChecked();

//MULTIPLE CHECKBOC
const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const checkbox:Locator[]=days.map(index=>page.getByLabel(index))
// expect(checkbox.length).toBe(7)
// for(const c of checkbox){
//     await c.check();
//     await expect(c).toBeChecked();
// }
// for(const c of checkbox.slice(-3)){
//     await c.uncheck();
//     await expect(c).not.toBeChecked();
// }
// for(const c of checkbox){
//     if(await c.isChecked()){
//     await c.uncheck();
//     await expect(c).not.toBeChecked();
//     }
//     else{

//     await c.check();
//     await expect(c).toBeChecked();
//     }
// }
// const index:number[]=[2,4,6]
//  for(const i of index){
//     await checkbox[i].check();
//     await expect(checkbox[i]).toBeChecked();
// }
const week:string="Friday";
for(const label of days){
    if(label.toLowerCase()===week.toLowerCase()){
        const fri=page.getByLabel(label)
        fri.check()
        await expect(fri).toBeChecked()
    }
}

      await page.waitForTimeout(3000); 
})