document.addEventListener('DOMContentLoaded', function () {
    const originalProducts = [
        { name: 'iPhone 13 Pro Max 512Gb', price: 900, image: './static/main/img/iphone13.png' },
        { name: 'iPhone 15 Pro 512Gb', price: 1200, image: './static/main/img/iphone15.png' },
        { name: 'iPhone 12 128Gb', price: 700, image: './static/main/img/iphone12.png' },
        { name: 'iPhone 14 256Gb Red', price: 1000, image: './static/main/img/iphone14.png' },
        { name: 'iPhone 13 Pro Max 512Gb', price: 900, image: './static/main/img/iphone13.png' },
        { name: 'iPhone 15 Pro 512Gb', price: 1200, image: './static/main/img/iphone15.png' },
        { name: 'iPhone 12 128Gb', price: 700, image: './static/main/img/iphone12.png' },
        { name: 'iPhone 14 256Gb Red', price: 1000, image: './static/main/img/iphone14.png' },
        { name: 'iPhone 13 Pro Max 512Gb', price: 900, image: './static/main/img/iphone13.png' },
        { name: 'iPhone 15 Pro 512Gb', price: 1200, image: './static/main/img/iphone15.png' },
        { name: 'iPhone 12 128Gb', price: 700, image: './static/main/img/iphone12.png' },
        { name: 'iPhone 14 256Gb Red', price: 1000, image: './static/main/img/iphone14.png' },
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
        productElement.href = '/product';

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