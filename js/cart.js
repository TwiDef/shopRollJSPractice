const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', (event) => {
    if (event.target.hasAttribute("data-cart")) {
        const card = event.target.closest('.card');

        // сборка данных о товаре и запись их в productInfo
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        };

        // проверка если ли уже такой товар в корзине 
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        // есть товар в корзине
        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            // нет товара в корзине
            // собранные данные вставим в шаблон для товара в корзине
            const cardItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
                    <div class="cart-item__details">
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            `;
            // отображение товара в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
        }
        // сбрасываем счетчик добавлненного товара
        card.querySelector('[data-counter]').innerText = '1';
        // Отображение статуса корзины
        toggleCardStatus();
        calcCardPrice();
    }

});