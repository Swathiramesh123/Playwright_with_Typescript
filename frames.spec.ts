import {test,expect} from '@playwright/test'
test("framees ",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // const frames=page.frames()
    // console.log("no of frames length",frames.length);
    //
    // const frame=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"})
    // if(frame)
    //     await page.locator('[name="mytext1"]').fill("Hello")
    // else{
    //     console.log("frame is not available");
        
    // }
    // const input=page.frameLocator("[src='frame_1.html']").locator('[name="mytext1"]')
    // await input.fill("Hello jhon")

   await page.waitForTimeout(5000)
    
})
test.only("child framees ",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    
     const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"})
    if(frame3){
        await frame3.locator('[name="mytext3"]').fill("Welcome")
        const childframes=frame3.childFrames()
        console.log("child frames length:",childframes.length);
        const radio=childframes[0].getByLabel("I am a human")
        await radio.check()
        await expect(radio).toBeChecked();
        
    }
    else{
         console.log("frame is not available");
        
    }
    
   await page.waitForTimeout(5000)
    
})