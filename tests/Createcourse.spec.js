import {test,expect} from "@playwright/test"

test("Verify Links", async function({page})
{
//test timeout is used to set time for whole test
  test.setTimeout(12000)
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com",{delay:200});
    await page.getByPlaceholder("Enter Password").pressSequentially("admin@123",{delay:200});
    await page.getByText("Sign in").last().click();
    

    await page.getByText("Manage",{exact:true}).click();
    await page.getByAltText("manage course").click();
    await page.locator("//button[text()='Add New Course ']").click();
    

    page.setInputFiles("#thumbnail","testdata/Sample.png")
    await page.locator("#name").pressSequentially("Cypress",{delay:200})
    await page.locator("#description").pressSequentially("automation cousre",{delay:200})
    await page.locator("#instructorNameId").pressSequentially("Mukesh",{delay:200})
    const price=page.locator("#price")
    price.fill('');
    price.fill("90.99");

  await page.locator("//input[@name='startDate']").click();
  await page.locator("//div[@aria-label='Choose Tuesday, October 21st, 2025']").click();
  await page.locator("//input[@name='endDate']").click();
 /* while (await page.locator("//div[@class='react-datepicker__current-month']").textContent()!=='January')
  {
    await page.locator("//span[text()='Next Month']").click();
  }*/
 //  await page.locator("//div[@aria-label='Choose Wednesday, January 7th, 2026']").click();
   await page.locator("//div[@aria-label='Choose Saturday, November 29th, 2025']").click();
   await page.getByAltText("select category").click();
   await page.locator("//button[text()='AWS']").click();
   await page.locator("//button[text()='Save']").click();
   await expect(page.locator("//td[text()='Cypress']")).toBeVisible();
   await page.locator("//td[text()='Cypress']//following::button[1]").click();
   await expect(page.locator("//td[text()='Cypress']")).not.toBeVisible();
  await page.waitForTimeout(5000);

})
