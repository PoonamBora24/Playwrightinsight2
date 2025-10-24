/*import {test} from "@playwright/test"


test("Verify Alerts", async function({page})
{

await page.goto("https://freelance-learn-automation.vercel.app/login");

await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com",{delay:200})
await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:200})
await page.getByText("Sign in").last().click();

await page.getByText("Manage",{exact:true}).click();
    
await page.getByAltText("Manage Categories").click();
await page.locator("//button[text()='Add New Category']").click();
    
});*/

import {test,expect} from "@playwright/test"

test("Verify Links", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com",{delay:200});
    await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:200});
    await page.getByText("Sign in").last().click();

    await page.getByText("Manage",{exact:true}).click();
    await page.getByAltText("manage course").click();
    await page.locator("//button[text()='Add New Course ']").click();
})