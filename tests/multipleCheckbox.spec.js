import {test} from "@playwright/test"

test("linkedin check",async function ({page})   
{
await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.locator("//a[@href='/signup']").click();

await page.waitForSelector("//input[@type='checkbox']");
let allelements=await page.locator("//input[@type='checkbox']");
let checboxcount=await allelements.count();
console.log(checboxcount);

for(let index=0; index<checboxcount;index++)
{
    await allelements.nth(index).click()
}
//click on login form linkedin button and not on the footer one
//await page.locator("//div[@id='login_container']//a[contains(@href,'linkedin')]").click();

 await page.waitForTimeout(5000);
})