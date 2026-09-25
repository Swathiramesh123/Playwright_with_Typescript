import{test,expect,Page} from "@playwright/test"
let page: Page
 test.beforeAll("Before all",async({browser})=>{
    page=await browser.newPage();
      await page.goto("https://www.demoblaze.com/index.html");
    
    
 })
 test.afterAll("Closing App",async()=>{
        await page.close()
        
    })
 

    
    test.beforeEach("Login",async()=>{
        await page.locator("#login2").click()
        await page.locator("#loginusername").fill("pavanol")
        await page.locator("#loginpassword").fill("test@123")
        await page.locator("button[onclick='logIn()']").click()
        await page.waitForTimeout(5000)
        
    })
    test.afterEach("Login",async()=>{
        await page.locator("#logout2").click()
        
    })



    test("find n of products",async()=>{
        const products=await page.locator("#tbodyid .hrefch")
        const count=await products.count();
        console.log("no of count",count)
        await expect(products).toHaveCount(9);
        
        
    })
     test("add products",async()=>{
        await page.locator("text='Samsung galaxy s6'").click()
        
        page.once("dialog",async (dialog)=>{
            expect(dialog.message()).toContain("Product added")
            await dialog.accept()

        })
        await page.locator(".btn.btn-success.btn-lg").click()
    })
     
    
