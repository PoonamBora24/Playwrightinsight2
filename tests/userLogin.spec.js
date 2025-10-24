import {test} from "@playwright/test"

test("User Login Validate",async function ({page})   
{
await page.goto("https://freelance-learn-automation.vercel.app/login")

await page.getByPlaceholder("Enter Email").fill("admin@email.com")
await page.pause()

//Checkbox for javascript
//label[text()='JavaScript']/../descendant::input

//for dropdown options
//select#hobbies>option       list the number of options available
//select#hobbies>option:first-child    traverse to first option
//select#hobbies>option:last-child    traverse to last option
//select#hobbies>option:nth-child[1]    traverse to the option index provided

})

