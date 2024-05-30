document.addEventListener('DOMContentLoaded', function () {
    // Получаем элементы DOM
    const decrementButtons = document.querySelectorAll('.counter #decrement');
    const incrementButtons = document.querySelectorAll('.counter #increment');
    const countElements = document.querySelectorAll('.counter #count');
    const endPriceElement = document.querySelector('.pricing-information .product-end-price');

    let prices = [900, 200]; // Значения цен для каждого продукта
    let counts = [0, 0]; // Значения количества для каждого продукта

    // Функция для обновления отображаемого значения цены и итоговой цены
    function updatePrice() {
        let totalPrice = 0;

        for (let i = 0; i < counts.length; i++) {
            const productPrice = prices[i];
            const productCount = counts[i];
            const productTotalPrice = productPrice * productCount;

            const productBlock = document.querySelectorAll('.product-block')[i];
            const endPriceSpan = productBlock.querySelector('.product-end-price');

            endPriceSpan.textContent = `$${productTotalPrice}`;
            totalPrice += productTotalPrice;
        }

        endPriceElement.textContent = `$${totalPrice}`;
    }

    // Функция для уменьшения значения счетчика
    function decrement(index) {
        if (counts[index] > 0) {
            counts[index]--;
            countElements[index].textContent = counts[index];
            updatePrice();
        }
    }

    // Функция для увеличения значения счетчика
    function increment(index) {
        counts[index]++;
        countElements[index].textContent = counts[index];
        updatePrice();
    }

    // Назначаем обработчики событий
    decrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => decrement(index));
    });

    incrementButtons.forEach((button, index) => {
        button.addEventListener('click', () => increment(index));
    });

    // Инициализация отображения цены
    updatePrice();
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}