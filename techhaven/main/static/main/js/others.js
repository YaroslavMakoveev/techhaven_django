document.addEventListener('DOMContentLoaded', function () {
    const originalProducts = [
        { name: 'Беспроводная зарядка Infinix', price: 100, image: './static/main/img/infinix.png' },
        { name: 'iPhone 13 Pro Max Case', price: 50, image: './static/main/img/13case.png' },
        { name: 'Apple MagSafe', price: 400, image: './static/main/img/magsafe.png' },
        { name: 'Переходник для айфона', price: 10, image: './static/main/img/adapter.png' },
        { name: 'Беспроводная зарядка Infinix', price: 100, image: './static/main/img/infinix.png' },
        { name: 'iPhone 13 Pro Max Case', price: 50, image: './static/main/img/13case.png' },
        { name: 'Apple MagSafe', price: 400, image: './static/main/img/magsafe.png' },
        { name: 'Переходник для айфона', price: 10, image: './static/main/img/adapter.png' },
        { name: 'Беспроводная зарядка Infinix', price: 100, image: './static/main/img/infinix.png' },
        { name: 'iPhone 13 Pro Max Case', price: 50, image: './static/main/img/13case.png' },
        { name: 'Apple MagSafe', price: 400, image: './static/main/img/magsafe.png' },
        { name: 'Переходник для айфона', price: 10, image: './static/main/img/adapter.png' },
    ];

    const products = [...originalProducts];

    function renderProducts(productsArray) {
        const productsContainer = document.getElementById('blocks');
        productsContainer.innerHTML = '';

        productsArray.forEach(product => {
            const productElement = createProductElement(product);
            productsContainer.appendChild(productElement);
        });
    }

    function createProductElement(product) {
        const productElement = document.createElement('a');
        productElement.classList.add('block');
        productElement.href = '../pages/product_page.html';

        const imgElement = document.createElement('img');
        imgElement.src = product.image;
        productElement.appendChild(imgElement);

        const nameElement = document.createElement('p');
        nameElement.classList.add('head');
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        const priceElement = document.createElement('p');
        priceElement.classList.add('price');
        priceElement.textContent = `$${product.price}`;
        productElement.appendChild(priceElement);

        return productElement;
    }

    function sortProductsByPrice(order) {
        if (order === 'none') {
            renderProducts(originalProducts);
            return;
        }

        products.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
        renderProducts(products);
    }

    const sortProductsSelect = document.getElementById('sort-price');
    sortProductsSelect.addEventListener('change', function () {
        const selectedOrder = sortProductsSelect.value;
        sortProductsByPrice(selectedOrder);
    });

    renderProducts(originalProducts);
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }