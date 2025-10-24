import {test} from "@playwright/test"

test("Verify Links", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    
    //await page.waitForSelector("//a[@href]]");
    let alllinks= await page.locator("//a[@href]");
    let linkcount= await alllinks.count();
    console.log(linkcount);

    for(let index=0; index<linkcount; index++)
    {
        let element= alllinks.nth(index);
        let value=await element.getAttribute("href");
        console.log(value);
        
    }

})