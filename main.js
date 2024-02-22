const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menuHamburguesa');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#product-detail');

const productDetailCloseIcon = document.querySelector('.product-detail-close');


function toggleDesktopMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isShoppingCartClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


const productList = [];
productList.push({
    name: 'Laptop',
    price: 600,
    image: '/assets/img/laptop.jpg'
});
productList.push({
    name: 'TV',
    price: 430,
    image: '/assets/img/tv.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: '/assets/img/bike.jpg'
});
productList.push({
    name: 'Jacket',
    price: 70,
    image: '/assets/img/jacket.jpg'
});
productList.push({
    name: 'Dining Room',
    price: 520,
    image: '/assets/img/dining-room.jpg'
});
productList.push({
    name: 'Umbrella',
    price: 25,
    image: '/assets/img/umbrella.jpg'
});
productList.push({
    name: 'Lego Star Wars',
    price: 90,
    image: '/assets/img/lego-star-wars.jpg'
});



/*
<div class="product-card">
    <img src="/assets/img/Bike.jpg" alt="">
    <div class="product-info">
        <div>
            <p>$120.000</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="/assets/img/logo-carrito.png" alt="">
        </figure>
    </div>
</div> 
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        // product={name, price, image} -> product.image
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/assets/img/logo-carrito.png');
    
        cardsContainer.appendChild(productCard);
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
                productInfo.appendChild(productInfoDiv);
                    productInfoDiv.appendChild(productPrice);
                    productInfoDiv.appendChild(productName);
                productInfo.appendChild(productInfoFigure);
                    productInfoFigure.appendChild(productImgCart);
    }
}

renderProducts(productList);

