import { test, expect } from './fixtures/test.fixture.js'
import { addProductsToCart, navigateToCart } from './helpers/cart.helper.js'

// TC09 & TC10 & TC12
test("should complete checkout with valid information", async ({ authenticatedPage }) => {
    await addProductsToCart(authenticatedPage, 2)
    await navigateToCart(authenticatedPage)

    await authenticatedPage.getByRole("button", { name: "Checkout" }).click()
    await expect(authenticatedPage.getByText("Checkout: Your Information")).toBeVisible()

    await authenticatedPage.getByPlaceholder("First Name").fill("Jessi")
    await authenticatedPage.getByPlaceholder("Last Name").fill("Jean")
    await authenticatedPage.getByPlaceholder("Zip/Postal Code").fill("121212")

    await authenticatedPage.getByText("Continue").click()

    await expect(authenticatedPage.locator('[data-test="total-info-label"]')).toBeVisible()

    await authenticatedPage.getByRole("button", { name: "Finish" }).click()

    await expect(authenticatedPage.getByText("Thank you for your order!")).toBeVisible()

})

// TC11
test("should show error when required fields are missing", async ({ authenticatedPage }) => {
    await addProductsToCart(authenticatedPage, 2)
    await navigateToCart(authenticatedPage)

    await authenticatedPage.getByRole("button", { name: "Checkout" }).click()
    await expect(authenticatedPage.getByText("Checkout: Your Information")).toBeVisible()

    await authenticatedPage.getByPlaceholder("First Name").fill("")
    await authenticatedPage.getByPlaceholder("Last Name").fill("")
    await authenticatedPage.getByPlaceholder("Zip/Postal Code").fill("")

    await authenticatedPage.getByText("Continue").click()

    await expect(authenticatedPage.locator('[data-test="error"]')).toBeVisible()

})