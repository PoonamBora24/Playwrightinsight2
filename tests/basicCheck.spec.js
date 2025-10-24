import {test, expect} from "@playwright/test"

test("Verify Page title", async function({page}){
await page.goto("https://freelance-learn-automation.vercel.app/signup")

let title=await page.title()
let urlnew=await page.url()
console.log("The url is " +urlnew);
expect(urlnew).toContain("singup")
expect(title).toContain("Automation")

})