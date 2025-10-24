import {test} from "@playwright/test"
import { clearScreenDown } from "readline";

test("User create and delete", async function({page}){
  
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").pressSequentially("Admin", {delay:200})
    await page.getByPlaceholder("Password").pressSequentially("admin123", {delay:200})
    await page.locator("//button[@type='submit']").click()
    await page.locator("//a[contains(@href,'admin')]").click()
    await page.locator("(//button[normalize-space()='Add'])[1]").click()
   await page.locator("//input[@placeholder='Type for hints...']").fill("Poonam Bora")

await page.locator("//label[text()='User Role']/following::div[1]").click()
await page.locator(".oxd-select-option", {hasText:'Admin'}).click()

await page.locator("//label[text()='Status']/following::div[1]").click()
await page.locator(".oxd-select-option", {hasText:'Enabled'}).click()

await page.locator("//label[text()='Username']/following::input[1]").fill("Poonam")

let pwd=page.locator("//label[text()='Password']/following::input[1]")
await pwd.click()
await pwd.fill("Poonam123")
await page.locator("//label[text()='Confirm Password']/following::input[1]").fill("Poonam123")
await page.locator("//button[@type='submit']").click()
//await page.locator("//div[@class=oxd-select-text-input] ", {hasText:'Admin'}).click()
//await page.waitForSelector("//div[@class='oxd-select-text-input']",{state:"visible"})

/*let role=page.locator("//div[@class='oxd-select-text-input']")
let rolecount=await role.count();
console.log(`${rolecount}`)
for(let index=0;index<rolecount;index++)
{
    let element=role.nth(index);
    let value=await element.innerText();
    console.log(`${value}`)
   /* if(value.includes("Admin"))
    {
        await element.click();
        await page.waitForTimeout(5000)
        break;
    }*/
//}

await page.waitForTimeout(5000)




})