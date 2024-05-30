document.addEventListener('DOMContentLoaded', function () {
    const originalProducts = [
        { name: 'Apple AirPods 3', price: 200, image: './static/main/img/air3.png' },
        { name: 'Apple AirPods Max', price: 600, image: './static/main/img/airMax.png' },
        { name: 'JBL Tune 125TWS Black', price: 100, image: './static/main/img/JBL.png' },
        { name: 'NOKIA Clarity Earbuds+', price: 120, image: './static/main/img/nokia.png' },
        { name: 'Apple AirPods 3', price: 200, image: './static/main/img/air3.png' },
        { name: 'Apple AirPods Max', price: 600, image: './static/main/img/airMax.png' },
        { name: 'JBL Tune 125TWS Black', price: 100, image: './static/main/img/JBL.png' },
        { name: 'NOKIA Clarity Earbuds+', price: 120, image: './static/main/img/nokia.png' },
        { name: 'Apple AirPods 3', price: 200, image: './static/main/img/air3.png' },
        { name: 'Apple AirPods Max', price: 600, image: './static/main/img/airMax.png' },
        { name: 'JBL Tune 125TWS Black', price: 100, image: './static/main/img/JBL.png' },
        { name: 'NOKIA Clarity Earbuds+', price: 120, image: './static/main/img/nokia.png' },
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