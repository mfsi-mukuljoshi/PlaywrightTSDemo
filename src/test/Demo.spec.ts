import { test  } from "@playwright/test";

test('demo test ',async ({page})=>{

    await page.goto("https://www.google.com")
    console.log("mukul is best");
})
