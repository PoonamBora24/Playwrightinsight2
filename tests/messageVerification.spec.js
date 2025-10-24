import {test, expect} from "@playwright/test"

test("Empty Login Attempt", async function ({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
     await page.waitForTimeout(5000)

    await page.getByText("Sign in").last().click();

    await page.waitForTimeout(5000)

    await expect(page.getByText("Email and Password is required")).toBeVisible();

})

test("Verify Susername only", async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForTimeout(5000)
    await page.getByPlaceholder("Enter Email").fill("mukesh@gmail.com")
    await page.getByText("Sign in").last().click();
    await page.waitForTimeout(5000);
    await expect(page.getByText("Password is required")).toBeVisible();
    
})

test("Verify Paswword only", async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForTimeout(5000)
    await page.getByPlaceholder("Enter Password").fill("mukesh@gmail.com")
    await page.getByText("Sign in").last().click();
    await page.waitForTimeout(5000);
    await expect(page.getByText("Email is required")).toBeVisible();
    
})

test("Verify Invalid Credentials", async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForTimeout(5000)
     await page.getByPlaceholder("Enter Email").fill("mukesh@gmail.com")
    await page.getByPlaceholder("Enter Password").fill("mukesh@gmail.com")
    await page.getByText("Sign in").last().click();
    await page.waitForTimeout(5000);
    await expect(page.getByText("Email and Password Doesn't match")).toBeVisible();
    
})
