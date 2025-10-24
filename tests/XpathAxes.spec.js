import {test, expect} from "@playwright/test"

test("Verify price", async function ({page}) {
    await page.goto("https://www.saucedemo.com/v1/index.html")

    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.waitForTimeout(3000);
    await page.locator("#login-button").click();
    await page.waitForTimeout(3000);
   //let price_element= await page.locator("//div[@class='inventory_item_label']//div[@class='inventory_item_price'][1]")
  // let price=price_element.innerText();
//console.log(price);


// using xapth access to find the locator of the price
////div[text()='Sauce Labs Backpack']/../..//following::div[@class='inventory_item_price'][1]

// first add to cart button
//div[text()='Sauce Labs Backpack']/../..//following::button[1]


})