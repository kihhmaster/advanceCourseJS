const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
								<img src="img/item_1.png" class="img-fluid" alt="img">
                <h3>${title}</h3>
                <p>${price + " руб."}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list = []) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    }).join('');

    document.querySelector('.products').insertAdjacentHTML('beforebegin', productList);
}

renderProducts(products);
