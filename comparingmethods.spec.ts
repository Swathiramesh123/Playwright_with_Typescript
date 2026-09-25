import {test,expect,Locator} from '@playwright/test'
test("comparing methods",async({page})=>{
 // await page.goto("https://demowebshop.tricentis.com/")
 await page.goto("https://demowebshop.tricentis.com/", {
    waitUntil: "domcontentloaded"
  });
  const product:Locator=page.locator(".product-title")
 // console.log(await product.nth(2).innerText());
  //console.log(await product.nth(2).textContent())
  const count=await product.count()
 // console.log("innertext");
  
  for(let i=0;i<count;i++){
     // const productName:string=await product.nth(i).innerText()
      //console.log(productName);
      
  }

  //console.log("textcontent..:");
  
  for(let i=0;i<count;i++){
    // const productNamee:(string|null)= await product.nth(i).textContent()
    // console.log(productNamee?.trim());
     
  }
  const productName:string[]=await product.allInnerTexts()
     // console.log("all innertext: ",productName);
  const productNamee:string[]=productName.map(rim=>rim.trim())
     // console.log(productNamee)
     //3.ALL
     const allprod:Locator[]=await product.all()
    // console.log(allprod);
    // console.log(await allprod[1].innerText);
     
     
     for(let p of allprod){
//console.log(await p.innerText());
        
     }
  

})
