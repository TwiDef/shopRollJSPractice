/* const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
let counter = document.querySelector('[data-counter]'); */


/* btnMinus.addEventListener('click', () => {
    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;
    }
});

btnPlus.addEventListener('click', () => {
    counter.innerText = ++counter.innerText;
}); */

window.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'plus') {
        const counterWrapper = event.target.closest('.counter-wrapper'); // нахождение родителя
        const counter = counterWrapper.querySelector('[data-counter]');
        counter.innerText = ++counter.innerText;
    }
    if (event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper'); // нахождение родителя
        const counter = counterWrapper.querySelector('[data-counter]');
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});