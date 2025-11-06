import { test, expect } from '../fixtures/test.fixture.js'
import { addProductsToCart, navigateToCart } from '../helpers/cart.helper.js'

// TC08
test("should display cart with added items", async ({ authenticatedPage }) => {
    await addProductsToCart(authenticatedPage, 2)

    await expect(authenticatedPage.locator('[data-test="shopping-cart-badge"]')).toHaveText("2")

    await authenticatedPage.locator('[data-test="shopping-cart-link"]').click()

    await expect(authenticatedPage.locator('[data-test="inventory-item"]')).toHaveCount(2)
})