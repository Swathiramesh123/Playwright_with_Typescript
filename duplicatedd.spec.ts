import {test,expect,Locator} from '@playwright/test'
test("Duplicate dropdown",async({page})=>{
    page.goto("https://testautomationpractice.blogspot.com/")
//const dd:Locator=page.locator("#color>option")
const dd:Locator=page.locator("#country>option")
    
    const optiontext:string[]=(await dd.allTextContents()).map(text=>text.trim())
    const myset=new Set<string>();
    const dup:string[]=[];
    for(const o of optiontext){
        if(myset.has(o)){
            dup.push(o)
        }
        else{
            myset.add(o)
        }
    }
    console.log("duplicate elements are",dup);
    
    if(dup.length>0){
        console.log("dup found =>",dup);
        
    }
    else{
        console.log("no dup found");
        
    }
    expect(dup.length).toBe(0)
})