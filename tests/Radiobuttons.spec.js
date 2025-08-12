import {test,expect} from "@playwright/test"

test("handle radio button",async({page})=>{
    await page.goto("https://itera-qa.azurewebsites.net/home/automation");

   //radio button 
   await page.locator("//input[@value='option2']").check();//male

//    await page.check("//input[@value='option2']")

 await expect(await page.locator("//input[@value='option2']")).toBeChecked();
  await expect(await page.locator("//input[@value='option2']").isChecked()).toBeTruthy();

 await expect(await page.locator("//input[@value='option2']").isChecked()).toBeFalsy();

 




  


    await page.waitForTimeout(5000);
})