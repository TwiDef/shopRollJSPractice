function calcCardPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    let totalPrice = 0;

    cartItems.forEach((item) => {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice += currentPrice;
    });

}