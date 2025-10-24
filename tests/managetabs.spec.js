import {test} from "@playwright/test"

test("Manage tabs", async ({browser}) =>
    {
         let context=await browser.newContext()
         let page=await context.newPage()
        await page.goto("https://freelance-learn-automation.vercel.app/login");

        let [facebookpage]= await Promise.all([
        context.waitForEvent("page"),
         await page.locator("(//a[contains(@href,'facebook')])[1]").click()
       ])

        let [accountpage] = await Promise.all([
        context.waitForEvent("page"),
        await facebookpage.getByText("Create new account").click()
        ])
await accountpage.locator("//input[@name='firstname']").pressSequentially("Poonam",{delay:200})
await accountpage.locator("//input[@name='lastname']").pressSequentially("Bora",{delay:200})   
await accountpage.locator("//select[@id='day']").selectOption("9")
await accountpage.locator("//select[@id='month']").selectOption("3")
await accountpage.locator("//select[@id='year']").selectOption("2000")
   
await page.waitForTimeout(5000);
});