import {test,expect,Locator} from '@playwright/test'
test("Xpath axes demo",async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp")
    const germanyCell:Locator=page.locator("//td[text()='Germany']/self::td")
await expect(germanyCell).toHaveText("Germany");
    //PARENT
    const parentCell:Locator=page.locator("//td[text()='Germany']/parent::tr")
    await expect(parentCell).toContainText("Maria Anders");
    //child
    const child:Locator=page.locator("//table[@id='customers']//tr[2]/child::td")
    await expect(child).toHaveCount(3);
    //ancestor
    const ancestor:Locator=page.locator("//td[text()='Germany']/ancestor::table")
    await expect(ancestor).toHaveAttribute('id','customers')
    //descendant
    const des:Locator=page.locator("//table[@id='customers']/descendant::td")
    await expect(des).toHaveCount(18)
    //following
    const follow:Locator=page.locator("//td[normalize-space()='Germany']//following::td[1]")
    await expect(follow).toHaveText("Centro comercial Moctezuma")
    //following sibling
    const flwsib:Locator=page.locator("//td[normalize-space()='Maria Anders']//following-sibling::td")
    await expect(flwsib).toHaveCount(1)
    const preceding:Locator=page.locator("//td[text()='Germany']/preceding::td[1]")
    await expect(preceding).toHaveText("Maria Anders")
    const precsib:Locator=page.locator("//td[text()='Germany']/preceding-sibling::td")
    await expect(precsib).toHaveCount(2)








    
})