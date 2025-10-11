import { test as base, expect } from '@playwright/test';

export const test = base.extend({
    authenticatedPage: async ({ page }, use) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
        await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
        await page.getByRole("button", { name: "Login" }).click();
        await use(page);
    }
});
export { expect };