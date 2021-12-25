const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Variables
const wrapperInfo = $('.info');
const wrapperProduct = $('.wrapper-content');
const notifyQnt = $('.right-item span');
const btnCart = $('.right-item i');
const wrapperCart = $('.wrapper-cart')
const overlayCart = $('.overlay1');
const closeCartBtn = $('.close-cart');

// render UI product

const renderProducts = () => {
    const htmls = listProducts.map((product) => {
        return `
                <div class="content-item col l-3 m-6 c-12">
                    <div class="img">
                        <img src="${product.img}" alt="">
                        <span>QUICK VIEW</span>
                    </div>
                    <p>${product.name}</p>
                    <div class="price">
                        <span class="before-price">${product.defaultPrice}đ</span>
                        <span class="current-price">${product.currentPrice}đ</span>
                    </div>
                    <button class="add-cart">
                        THÊM VÀO GIỎ HÀNG
                    </button>
                </div>
                `
    })
    wrapperProduct.innerHTML = htmls.join('');
    const addCart = $$('.add-cart');
    for (let i = 0; i < addCart.length; i++) {
        addCart[i].addEventListener('click', () => {
            addToCart(listProducts[i]);
        })
    }
}

renderProducts();

const listProductsInCart = [];

// Render info quick view
const renderAndHandleQuickView = (product) => {
    let status;
    const descList = product.desc;
    const desc = descList.map((item) => {
        return `
            <li class="desc-item">${item}</li>
        `
    });
    if (product.isEmpty) {
        status = 'hết hàng';
    } else {
        status = 'còn hàng';
    }
    const htmls = `
    <img class="col l-6 m-12 c-12" src="${product.img}" alt="">
    <div class="content-info col l-6 m-12 c-12">
        <h1>${product.name}</h1>
        <i class="fas fa-times close-btn"></i>
        <div class="price">
            <span class="before-price">${product.defaultPrice}đ</span>
            <span class="current-price">${product.currentPrice}đ</span>
        </div>
        <ul class="desc-list">
            ${desc.join('')}
        </ul>
        <span class="status">${status} (${product.quantity})</span>
        <div class="wrapper-add-cart">
            <input type="button" value="-" class="subtract">
            <input type="number" name="" id="number" disabled value="1">
            <input type="button" value="+" class="add">
            <button class="add-cart">
                THÊM VÀO GIỎ HÀNG
            </button>
        </div>
    </div>
    `
    wrapperInfo.innerHTML = htmls;
    // Check the status of the product 
    checkEmpty(product.isEmpty);
    // Hide quick info when click close btn or overlay
    hideQuickInfo();
    // Handle Quantity to add cart
    handleQnt(product);

    // Add to cart in quick view
    const inputQnt = $('#number');
    const addCartBtns = $$('.add-cart');
    const addCartQuickView = addCartBtns[addCartBtns.length - 1];
    const statusNotify = $('.status');
    addCartQuickView.addEventListener('click', () => {
        if (statusNotify.classList.contains('empty')) {
            alert("Sản phẩm này đã hết hàng, quý khách thông cảm!");
        } else {
            addToCart(product, inputQnt.value);
        }
    })
}

// Add cart to local storage
const addToCart = (product, quantity = 1) => {
    const infoProduct = {
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.currentPrice,
        type: product.type,
        quantity: quantity,
    }
    checkCartAndSetStorage(product, infoProduct, quantity);
    renderCart();
}

// Check if the product is in the cart
const checkCartAndSetStorage = (product, infoProduct, quantity) => {
    alert("Thêm sản phẩm vào giỏ hàng thành công!");
    const dataString = localStorage.getItem('listProductsInCart');
    const inCart = dataString ? JSON.parse(dataString) : [];
    if (inCart.length !== 0) {
        let count = 0,
            isAdd = true;
        let checkQuantity;
        for (let i = 0; i < inCart.length; i++) {
            if (product.id === inCart[i].id) {
                checkQuantity = inCart[i].quantity + quantity;
                if (checkQuantity > product.quantity) {
                    alert("Giỏ hàng đã có số lượng của mặt hàng này đạt giới hạn!");
                    isAdd = false;
                } else {
                    inCart[i].quantity += quantity;
                    count++;
                }
            }
        }
        if (isAdd) {
            if (count) {
                localStorage.setItem('listProductsInCart', JSON.stringify(inCart));
            } else {
                inCart.push(infoProduct);
                localStorage.setItem('listProductsInCart', JSON.stringify(inCart));
            }
        }
    } else {
        listProductsInCart.push(infoProduct);
        localStorage.setItem('listProductsInCart', JSON.stringify(listProductsInCart));
    }
}

// Change quantity to add cart
const handleQnt = (product) => {
    const increaseBtn = $('.add');
    const reduceBtn = $('.subtract');
    const inputQnt = $('#number');

    if (!product.isEmpty) {
        increaseBtn.addEventListener('click', () => {
            if (inputQnt.value < product.quantity) {
                inputQnt.value++;
            }
        });

        reduceBtn.addEventListener('click', () => {
            if (inputQnt.value > 1) {
                inputQnt.value--;
            }
        })
    } else {
        increaseBtn.style.cursor = 'default';
        reduceBtn.style.cursor = 'default';
        inputQnt.value = 0;
    }
}

// Check the status of the product
const checkEmpty = (isEmpty) => {
    const statusNotify = $('.status');
    const addCartBtn = $('.wrapper-add-cart .add-cart');
    if (isEmpty) {
        statusNotify.classList.add('empty');
        addCartBtn.classList.add('disabled');
    } else {
        statusNotify.classList.remove('empty');
        addCartBtn.classList.remove('disabled');
    }
}

// Show quick view
const quickViewBtns = $$('.content-item .img span');
const quickInfo = $('.quick-info');

// Click quick view btn to popup wrapper quick view and render info
for (let i = 0; i < quickViewBtns.length; i++) {
    quickViewBtns[i].addEventListener('click', () => {
        quickInfo.classList.add('popup');
        renderAndHandleQuickView(listProducts[i]);
    })
}

// hide quick info when click close btn or overlay
const hideQuickInfo = () => {
    const overlayInfo = $('.overlay');
    const closeInfoBtn = $('.content-info .close-btn');
    overlayInfo.addEventListener('click', () => {
        quickInfo.classList.remove('popup');
    });
    closeInfoBtn.addEventListener('click', () => {
        quickInfo.classList.remove('popup');
    });
}

// Handle Cart
const deleteAllBtn = $('.delete-all');
const wrapperCartList = $('.list-cart');
const renderCart = () => {
    const dataString = localStorage.getItem('listProductsInCart');
    const inCart = dataString ? JSON.parse(dataString) : [];
    notifyQnt.innerText = inCart.length;
    if (inCart.length !== 0) {
        const htmls = inCart.map((product) => {
            return `
            <li class="cart-item">
                <img src="${product.img}" alt="">
                <div class="cart-item-body">
                    <div class="product-name">
                        <h5>${product.name}</h5>
                        <div class="info-product">
                            Giá:
                            <span class="product-price">${product.price}đ</span>
                            <span class="multi">x</span>
                            <span class="qnt">${product.quantity}</span>
                        </div>
                    </div>
                    <div class="type-product">
                        <span>Phân loại: <span class="type-item">${product.type}</span></span>
                        <div class="btn-delete">Xóa</div>
                    </div>
                </div>
            </li>
            `
        });
        wrapperCartList.innerHTML = htmls.join('');
        renderTotalPrice(inCart);
        const deleteBtns = $$('.btn-delete');
        deleteProduct(deleteBtns, inCart);
    } else {
        wrapperCartList.innerHTML = 'Giỏ hàng trống :((';
        renderTotalPrice(inCart);
    }
}

const renderTotalPrice = (inCart) => {
    const totalPrice = $('.total-price span');
    let total = 0;
    for (let i = 0; i < inCart.length; i++) {
        total += inCart[i].price.replace(/,/g, '') * inCart[i].quantity;
    }
    let totalArray = total.toString().split('');
    for (let i = totalArray.length - 4; i >= 0; i -= 3) {
        totalArray[i] += ',';
    }
    totalPrice.innerText = `${totalArray.join('')}đ`;
}

// Event click delete all in cart
const deleteAllCart = () => {
    localStorage.removeItem('listProductsInCart');
    renderCart();
}

deleteAllBtn.addEventListener('click', deleteAllCart);

// Event click delete btn
const deleteProduct = (element, inCart) => {
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener('click', () => {
            inCart.splice(i, 1);
            localStorage.setItem('listProductsInCart', JSON.stringify(inCart));
            renderCart();
        })
    }
}

renderCart();

// Cart view

btnCart.addEventListener('click', () => {
    wrapperCart.classList.add('show-cart');
})

const hideViewCart = () => {
    wrapperCart.classList.remove('show-cart');
}

closeCartBtn.addEventListener('click', hideViewCart);
overlayCart.addEventListener('click', hideViewCart);
//