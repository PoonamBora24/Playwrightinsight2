import {test} from "@playwright/test"
import { clearScreenDown } from "readline";

test("User create and delete", async function({page}){
  
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").pressSequentially("Admin", {delay:200})
    await page.getByPlaceholder("Password").pressSequentially("admin123", {delay:200})
    await page.locator("//button[@type='submit']").click()
    await page.getByText("Recruitment").click()
    await page.locator("//button[text()=' Add ']").click()

//this approach of uploading file is used when the file choosing element is in div tag

    let waitforfile=page.waitForEvent("filechooser")
    await page.locator("//div[text()='Browse']").click()

    let fileupload=await waitforfile
    await fileupload.setFiles("./testdata/Q&A.docx")
    await page.waitForTimeout(10000)

//Below method is used when it is the input tag
    //page.setInputFiles("#thumbnail","testdata/Sample.png")


}
)