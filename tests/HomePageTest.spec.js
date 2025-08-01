const {test,expect} =require('@playwright/test')

test('Home Page',async({page})=>{
    await page.goto('https://www.saucedemo.com/')

    const title=await page.title()
    console.log(title)
    await expect(page).toHaveTitle('Swag Labs')

    const pageurl=page.url();
    console.log(pageurl);
    await expect(page).toHaveURL("https://www.saucedemo.com/")
    await page.close();



})