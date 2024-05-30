    document.addEventListener('DOMContentLoaded', function () {
        const originalProducts = [
        { name: 'MacBook Air m1 256Gb', price: 1100, image: './static/main/img/macbookAir.png' },
        { name: 'MacBook Pro m2 1024Gb', price: 2000, image: './static/main/img/MacbookPro.png' },
        { name: 'Thunderobot Zero Ultra', price: 2000, image: './static/main/img/zero.png' },
        { name: 'ASUS ROG Strix G16', price: 2500, image: './static/main/img/asus.png' },
        { name: 'MacBook Air m1 256Gb', price: 1100, image: './static/main/img/macbookAir.png' },
        { name: 'MacBook Pro m2 1024Gb', price: 2000, image: './static/main/img/MacbookPro.png' },
        { name: 'Thunderobot Zero Ultra', price: 2000, image: './static/main/img/zero.png' },
        { name: 'ASUS ROG Strix G16', price: 2500, image: './static/main/img/asus.png' },
        { name: 'MacBook Air m1 256Gb', price: 1100, image: './static/main/img/macbookAir.png' },
        { name: 'MacBook Pro m2 1024Gb', price: 2000, image: './static/main/img/MacbookPro.png' },
        { name: 'Thunderobot Zero Ultra', price: 2000, image: './static/main/img/zero.png' },
        { name: 'ASUS ROG Strix G16', price: 2500, image: './static/main/img/asus.png' },
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