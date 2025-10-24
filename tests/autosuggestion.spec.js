import {test} from "@playwright/test"

test("Verify autosuggestion", async function({page})
{
    page.goto("https://www.google.com/")
    await page.locator("//textarea[@name='q']").fill("Mukesh otwani")
    await page.waitForSelector("//div[@role='option']")
   let allelemnts= page.locator("//div[@role='option']");
   let total=await allelemnts.count();
console.log(total);
for(let index=0;index<total;index++)
{
    let element=allelemnts.nth(index);
    let value=await element.innerText();
    console.log("suggestion from google" +value);
    
    if(value.includes(" github"))
    {
        await element.click();
        await page.waitForTimeout(5000)
         break;
    }
    

}


} )