import {test,expect,Locator} from '@playwright/test'
test("static table",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table:Locator=page.locator("table[name='BookTable'] tbody")
    await expect(table).toBeVisible()
    //rows:
        const rows:Locator=await page.locator("table[name='BookTable'] tbody tr")
         expect(rows).toHaveCount(7)
         //colums
                 const col:Locator=await page.locator("table[name='BookTable'] tbody tr th")
         expect(col).toHaveCount(4)
         //3.no of data in one row
         const secrowcells:Locator= rows.nth(2).locator("td")
         const secdata:string[]=await secrowcells.allInnerTexts();
        // console.log("secdta",secdata);
         //4.REad all table
         console.log("Printing all data...");
         const allRowdata=await rows.all();
        
         for(let r of allRowdata.slice(1)){
            const col=await r.locator("td").allInnerTexts()
           console.log(col.join("\t"));
            

         }
         //MUKESH Books
//console.log("Printing mukesh books...");
         const mukeshbook:string[]=[]
        
         for(let r of allRowdata.slice(1)){
            const cells=await r.locator("td").allInnerTexts()
            const author=cells[1];
            const books=cells[0]
            if(author==="Mukesh"){
                //console.log(`${author} \t ${books}`);
                mukeshbook.push(books)
                
            }}
            
 expect(mukeshbook).toHaveLength(2)
// console.log(mukeshbook,"no of mukesh books");
 

         

         //CALCULATING 
         let totalPrice:number=0;
         for(let r of allRowdata.slice(1)){
            const cells=await r.locator("td").allInnerTexts()
            const  p=cells[3]
            totalPrice=totalPrice+parseInt(p)
         }
//console.log("totalprice is..",totalPrice);
await expect(totalPrice).toBe(7100)

         
         

         


})