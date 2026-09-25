import {test,expect} from '@playwright/test'
import { log } from 'console';
import fs from 'fs';
import * as XLSX from "xlsx";
const excel='test-data/data.xlsx';
const workbook=XLSX.readFile(excel)
const sheetName=workbook.SheetNames[0]
const worksheet=workbook.Sheets[sheetName]

//const record=parse(fileContent,{columns:true,skip_empty_lines:true})
const loginData:any=XLSX.utils.sheet_to_json(worksheet);
console.log(loginData)


test.describe("login datam drivennn",async()=>{
for(const {email,password,validity} of loginData){
test(`Loginnnm test "${email}" and "${password}"`,async({page})=>{
await page.goto("https://demowebshop.tricentis.com/login")
await page.locator("#Email").fill(email)
await page.locator("#Password").fill(password)
await page.locator("input[value='Log in']").click()
if(validity.toLowerCase()==='valid'){
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
