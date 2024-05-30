document.addEventListener('DOMContentLoaded', function () {
    const originalProducts = [
        { name: 'iPad 10th Generation 64Gb', price: 720, image: './static/main/img/ipad10.png' },
        { name: 'iPad Pro 11 128Gb', price: 1200, image: './static/main/img/ipad11.png' },
        { name: 'Xiaomi Pad 5 64Gb', price: 400, image: './static/main/img/xpad5.png' },
        { name: 'Xiaomi Pad 6 128Gb', price: 550, image: './static/main/img/xpad6.png' },
        { name: 'iPad 10th Generation 64Gb', price: 720, image: './static/main/img/ipad10.png' },
        { name: 'iPad Pro 11 128Gb', price: 1200, image: './static/main/img/ipad11.png' },
        { name: 'Xiaomi Pad 5 64Gb', price: 400, image: './static/main/img/xpad5.png' },
        { name: 'Xiaomi Pad 6 128Gb', price: 550, image: './static/main/img/xpad6.png' },
        { name: 'iPad 10th Generation 64Gb', price: 720, image: './static/main/img/ipad10.png' },
        { name: 'iPad Pro 11 128Gb', price: 1200, image: './static/main/img/ipad11.png' },
        { name: 'Xiaomi Pad 5 64Gb', price: 400, image: './static/main/img/xpad5.png' },
        { name: 'Xiaomi Pad 6 128Gb', price: 550, image: './static/main/img/xpad6.png' },
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
        productElement.href = '#';

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