export async function addProductsToCart(page, count = 2) {
    const products = page.locator('[data-test="inventory-item"]');
    for (let i = 0; i < count; i++) {
        await products.nth(i).getByRole("button", { name: "Add to cart" }).click();
    }
}

export async function navigateToCart(page) {
    await page.locator('[data-test="shopping-cart-link"]').click();
}