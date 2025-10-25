import {test} from "@playwright/test"

test("Validate Add ti cart", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com",{delay:200});
    await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:200});
    await page.getByText("Sign in").last().click();
    
})