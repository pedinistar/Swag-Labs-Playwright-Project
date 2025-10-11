import { test, expect } from './fixtures/test.fixture.js'
import { addProductsToCart, navigateToCart } from './helpers/cart.helper.js'

// TC13
test("should logout user and redirect to login page", async ({ authenticatedPage }) => {
    await addProductsToCart(authenticatedPage, 2)
    await navigateToCart(authenticatedPage)

    await authenticatedPage.getByRole("button", { name: "Open Menu" }).click()
    await authenticatedPage.getByRole("link", { name: "Logout" }).click()

    await expect(authenticatedPage.getByRole("button", { name: "Login" })).toBeVisible()
    await expect(authenticatedPage).toHaveURL("https://www.saucedemo.com/")
})
