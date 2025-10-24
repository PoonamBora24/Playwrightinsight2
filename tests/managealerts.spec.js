import {test,expect} from "@playwright/test"


test("Verify Alerts", async ({browser}) =>
{
let context=await browser.newContext()
let page=await context.newPage()

await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com",{delay:200})
await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:200})
await page.getByText("Sign in").last().click();

await page.getByText("Manage",{exact:true}).click();

let [categorypage]= await Promise.all([
        context.waitForEvent("page"),
        await page.getByAltText("manage category").click()
         
       ])
let Categoryname="Playwright with Mukesh"


categorypage.once("dialog",(dia)=>{
expect(dia.message()).toBe("Enter a Category Name")
//console.log(`message:${dia.message()}`)
dia.accept(Categoryname)
})
await categorypage.locator("//button[normalize-space()='Add New Category']").click();
await expect(categorypage.locator(`//td[text()='${Categoryname}']`)).toBeVisible();


categorypage.once("dialog", (dia)=>{
   expect(dia.message()).toBe("Update the category")
    dia.accept("Automation Playwright")
   })
//await categorypage.locator(`//td[normalize-space()='${Categoryname}']//following::button[2]`).click()
await categorypage.locator(`//td[text()='${Categoryname}']/following-sibling::td/button[text()='Update ']`).click();
await expect(categorypage.locator(`//td[text()='${Categoryname}']`)).not.toBeVisible();

await categorypage.locator("//td[normalize-space()='Automation Playwright']//following::button[1]").click()
await categorypage.locator("//button[text()='Delete']").click()

await categorypage.waitForTimeout(15000)


});