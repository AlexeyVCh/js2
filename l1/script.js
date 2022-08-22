"use strict";

const products = [
  { id: 1, title: '1-Й продукт', price: 150, img: 'img/basket.png', description: 'Просто корзина.' },
  { id: 2, title: '2-Й продукт', price: 150, img: 'img/basket.png', description: 'Просто корзина.' },
  { id: 3, title: '3-Й продукт', price: 150, img: 'img/basket.png', description: 'Просто корзина.' },
  { id: 4, title: '4-Й продукт', price: 150, img: 'img/basket.png', description: 'Просто корзина.' },
  { id: 5, title: '5-Й продукт', price: 150, img: 'img/basket.png', description: 'Просто корзина.' },
  { id: 6, title: '6-Й продукт', price: 150, img: 'img/basket.png', description: 'Просто корзина.' },
];

const renderProductsList = (list) => {
  list.forEach((el) => {
    let productsList = renderProductsItem(el);
    document.querySelector('.products__list').innerHTML += productsList;
  });
};

const renderProductsItem = (el) => {
  return `<div class="products__item">
              <div class="products__item-img-wrp">
                  <img class="products__item-img" src="${el.img}" alt="${el.title}">
              </div>
              <h3 class="products__item-title"><a class="products__item-title-link" href="#">${el.title}</a></h3>
              <p class="products__item-description">${el.description}</p>
              <p class="products__item-price">${el.price}$</p>
              <button class="products__item-button" type="button">Купить</button>
          </div>`;
};

renderProductsList(products);