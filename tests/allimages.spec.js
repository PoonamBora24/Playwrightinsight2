import {test} from "@playwright/test"

test("Verify all images", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    
    //await page.waitForSelector("//a[@href]]");
    let allimages= await page.locator("//img[@src]");
    let imagecount= await allimages.count();
    console.log(imagecount);

    /*for(let index=0; index<imagecount; index++)  // using traditional for loop 
    {
        let element= allimages.nth(index);
        let value=await element.getAttribute("src");
        console.log(value);
        
    }*/

//using for of loop 
// when used x of allimages or imagecount..it was giving error as allimage and imagecount are not iterabl
//using allimages.all gives result as array hence can iterated
for( const x of await allimages.all())
    {
       let srcvalue= await x.getAttribute("src");
        console.log(srcvalue);
    }

})