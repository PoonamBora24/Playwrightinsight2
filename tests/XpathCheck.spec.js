import {test} from "@playwright/test"

test("Verify Login", async function ({page}) {
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("//input[@id='user-name']").fill("admin@gmail.com")
    await page.locator("//input[@id='password']").fill("admin@123")
    await page.locator("//input[@value='LOGIN']").click();

})