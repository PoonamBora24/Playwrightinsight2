import {test, expect} from "@playwright/test"
import { log } from "console"

test("Verify Blazedemo", async ( { page } ) => {

test.setTimeout(90000);
await page.goto("https://blazedemo.com/")
await page.waitForSelector('//select[@name="fromPort"]',{ state: "visible"});
//await page.locator("//select[@name='fromPort']/descendant[@value='Boston']").click();


const departure= page.locator('//select[@name="fromPort"]');
await departure.selectOption("Boston")
await page.waitForTimeout(5000)

const destination=page.locator('//select[@name="toPort"]' , {state: "visible"});
await destination.selectOption("New York")
await page.waitForTimeout(5000);

await page.locator('//input[@value="Find Flights"]').click();
await page.waitForTimeout(5000);

await page.locator('//input[@value="Lufthansa"]/preceding::input[@value="Choose This Flight"][1]').click();
await page.waitForTimeout(5000);
await expect(page).toHaveURL(/purchase/);
await page.waitForTimeout(5000);
await expect(page.locator('//p[1]')).toContainText("United");
await expect(page.locator('//p[2]')).toContainText("UA954");
await expect(page.locator('//p[3]')).toContainText("400");
await expect(page.locator('//p[4]')).toContainText("514.76");
await expect(page.locator('//p//em')).toContainText("914.76");

await page.waitForSelector(("#inputName"), {timeout:60000});
await page.locator("#inputName").fill("Playwright", {timeout:200});


await page.waitForSelector(("#address"), {timeout:60000});
await page.locator("#address").fill("Banglore", {timeout:200});

await page.waitForSelector(("//input[@name='state']"),{state: "visible"});
await page.locator("//input[@name='state']").fill("Karnataka");


await page.waitForSelector(("//select[@name='cardType']"), {state: "visible"});
await page.locator("//select[@name='cardType']").selectOption("American Express");

await page.locator("//input[@name='creditCardNumber']").pressSequentially("556622337788",{delay:200});
//await page.locator("//input[@name='creditCardMonth']").pressSequentially("11",{delay:200});
await page.locator("//input[@name='creditCardYear']").pressSequentially("2025",{delay:200});
await page.locator("//input[@name='nameOnCard']").pressSequentially("Playwright By Microsoft",{delay:200});
await page.locator("//input[@name='rememberMe']").click();
await page.locator("//input[@type='submit']").click();
let currenturl=page.url();
expect(currenturl).toContain("/confirmation");

let OrderId=await page.locator("//div[@class='container hero-unit']/descendant::td[2]").innerText();
console.log("Order Id is:"+OrderId)
expect(OrderId).not.toBeNull();

await page.waitForTimeout(6000);


})