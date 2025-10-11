import { test, expect } from './fixtures/test.fixture.js'
import { addProductsToCart, navigateToCart } from './helpers/cart.helper.js'

// TC05
test('should display all products after login', async ({ authenticatedPage }) => {
    await expect(authenticatedPage.locator('[data-test="inventory-item"]')).toHaveCount(6)
})

// TC06
test('should add product to cart', async ({ authenticatedPage }) => {
    const productCard = authenticatedPage.locator('[data-test="inventory-item"]').nth(2)
    await productCard.getByRole("button", { name: "Add to cart" }).click()

    await expect(authenticatedPage.locator('[data-test="shopping-cart-badge"]')).toHaveText("1")

    await authenticatedPage.locator("#shopping_cart_container").click()
    await expect(authenticatedPage.locator('[data-test="item-quantity"]')).toHaveText("1")
})

// TC07
test('should remove product from cart', async ({ authenticatedPage }) => {
    await addProductsToCart(authenticatedPage, 1)

    await expect(authenticatedPage.locator('[data-test="shopping-cart-badge"]')).toHaveText("1")

    await navigateToCart(authenticatedPage)

    expect(authenticatedPage.locator('[data-test="item-quantity"]')).toHaveText("1")

    await authenticatedPage.getByRole("button", { name: "Remove" }).click()

    await expect(authenticatedPage.locator('[data-test="shopping-cart-badge"]')).toBeHidden()
})