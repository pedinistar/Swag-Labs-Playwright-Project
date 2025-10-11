import { test, expect } from './fixtures/test.fixture.js';

test('should verify authenticatedPage title', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('https://www.saucedemo.com/');
    await expect(authenticatedPage).toHaveTitle(/Swag Labs/);

});

// TC01
test('should login successfully with valid credentials', async ({ authenticatedPage }) => {
    await expect(authenticatedPage).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(authenticatedPage.locator('[data-test="title"]')).toHaveText('Products')
});

// TC02
test('should show error with invalid username', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('https://www.saucedemo.com/');
    await authenticatedPage.getByRole('textbox', { name: 'Username' }).fill('invalid_user');
    await authenticatedPage.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await authenticatedPage.getByRole('button', { name: 'Login' }).click();

    await expect(authenticatedPage.locator("[data-test='error']")).toBeVisible()
})

// TC03
test('should show error with invalid password', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('https://www.saucedemo.com/');
    await authenticatedPage.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await authenticatedPage.getByRole('textbox', { name: 'Password' }).fill('wrong_password');
    await authenticatedPage.getByRole('button', { name: 'Login' }).click();

    await expect(authenticatedPage.locator("[data-test='error']")).toBeVisible()
})