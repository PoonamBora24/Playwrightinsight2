import {test} from "@playwright/test"

test("linkedin check",async function ({page})   
{
await page.goto("https://freelance-learn-automation.vercel.app/login")

//click on login form linkedin button and not on the footer one
await page.locator("//div[@id='login_container']//a[contains(@href,'linkedin')]").click();

 await page.waitForTimeout(5000);
})