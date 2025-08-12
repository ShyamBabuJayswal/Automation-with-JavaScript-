import {test,expect} from "@playwright/test"

test('handle inputbox',async({page})=>{
     
    await page.goto("https://itera-qa.azurewebsites.net/home/automation")

    //inputbox-firstname
     await expect(await page.locator("//input"));

      


    await page.locator("//input[@id='name']").fill("John")

    // page.fill("//input[@id='name]",'John')
    await page.waitForTimeout(5000)

    await page.close();


   







})