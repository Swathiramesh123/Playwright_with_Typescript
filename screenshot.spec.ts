import {test,expect} from '@playwright/test';
 test("screenshot demo",async({page})=>{
    
 await page.goto("https://demowebshop.tricentis.com/")
 const timestamp=Date.now()
 await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png',fullPage:true})
 const logo=page.locator('img[alt="Tricentis Demo Web Shop"]')
 await logo.screenshot({path:'screenshots/logo'+timestamp+'.png'})
})

test.only('screenshots from config', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('pavanol');

    await page.locator('#loginpassword').fill('test@1231'); // password incorrect

    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

});