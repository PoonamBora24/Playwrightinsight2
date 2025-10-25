import {test} from "@playwright/test"

test("Validate Add ti cart", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByText("Manage",{exact:true}).click();
    await page.getByAltText("manage course").click();
    await page.locator("//button[text()='Add New Course ']").click();
})
