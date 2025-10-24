import {test, expect} from "@playwright/test"

test("Verify Login", async function ({page}) {
    await page.goto("https://www.saucedemo.com/v1/index.html")

    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.waitForTimeout(3000);
    await page.locator("#login-button").click();
    await page.waitForTimeout(3000);
    await page.getByText("Open Menu").click();
    await page.getByText("Logout").click();
    await page.waitForTimeout(3000);
       
    expect(page).toHaveURL(/.*index.html/)


})