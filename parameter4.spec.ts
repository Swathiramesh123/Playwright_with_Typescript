import {test,expect} from '@playwright/test'
import fs from 'fs';
import {parse} from 'csv-parse/sync'
const csv='test-data/data.csv';
const fileContent= fs.readFileSync(csv, 'utf-8')

//const record=parse(fileContent,{columns:true,skip_empty_lines:true})
const record = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
}) as {
    email: string;
    password: string;
    validity: string;
}[];


test.describe("login data drivennn",async()=>{
for(const data of record){
test(`Loginnn test "${data.email}" and "${data.password}"`,async({page})=>{
await page.goto("https://demowebshop.tricentis.com/login")
await page.locator("#Email").fill(data.email)
await page.locator("#Password").fill(data.password)
await page.locator("input[value='Log in']").click()
if(data.validity.toLowerCase()==='valid'){
    const logout= page.locator("a[href='/logout']")
    await expect(logout).toBeVisible({timeout:5000})
}
else{
    const errormsg=page.locator(".validation-summary-errors")
    await expect(errormsg).toBeVisible({timeout:5000})
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
}
})
}
})
