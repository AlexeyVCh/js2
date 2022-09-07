class GoodsItem {
    constructor(title = "no name", price = 100000, img = "img/noPhoto.jpg", description = "no description") {
        this.title = title;
        this.price = price;
        this.img = img;
        this.description = description;

    }
    render() {
        return `<div class="goods-item">
                    <div class="goods-wrpItemImg">
                        <img class="goods-itemImg" src="${this.img}" alt="${this.title}">
                    </div>
                    <h3 class="goods-itemTitle"><a class="goods-itemTitleLink" href="#">${this.title}</a></h3>
                    <p class="goods-itemDescription">${this.description}</p>
                    <p class="goods-itemPrice">${this.price}$</p>
                    <button class="goods-itemButton" type="button">Купить</button>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Корзина', price: 15, img: 'img/basket.png', description: "Просто корзина." },
            { id: 2, title: 'Корзина', price: 20, img: 'img/basket.png', description: "Просто корзина." },
            { id: 3, title: 'Корзина', price: 10, img: 'img/basket.png', description: "Просто корзина." },
            { id: 4, title: 'Корзина', price: 50, img: 'img/basket.png', description: "Просто корзина." },
            { id: 5, title: 'Корзина', price: 100, img: 'img/basket.png', description: "Просто корзина." },
            { id: 6, title: 'Корзина', price: 15, img: 'img/basket.png', description: "Просто корзина." },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price, good.img, good.description);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    /*
    Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
    */
    getCalculateTotolPrice() {
        let total = 0;
        this.goods.forEach(goods => {
            total += goods.price;
        });
        return total;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

/*1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте,
    какие методы понадобятся для работы с этими сущностями.*/
class Basket { //Корзина
    constructor() {
        this.bayProduct = []; /*Массив товаров в виде объектов добавленных в карзину*/
    }
    addItem() { } /*Добавляем товар в корзину*/
    removeItem() { } /*Убираем товар из карзины*/
    increaseItem() { } /*Увеличиваем количество товара в корзине*/
    decreaseItem() { } /*Уменьшаем количество товара в корзине*/
    clearBasket() { } /*Очищаем корзину*/
    costPosition() { } /*считаем стоимость одной позиции товара с учетом ее количества */
    TotolCost() { } /*Считаем полную стоимость товаров в карзине*/
}

class Purchase { //Покупка
    constructor() {
        this.id = id;                   //id покупки
        this.Product = product;         //Купленные товары
        this.Bayer = bayer;             //Покупатель
        this.delivery = delivery;       //Выбрать способ доставки
        this.condition = condition;     //Состояние сделки (Оплачено, отправлено, доставлено, получено)
    }
    addBay() { }
}

class Delivery {    //Почтовые компании
    constructor() {
        this.name   //Название компании
    }
}

/*
Возможно потребуется покупатель с методом "Совершить покупку"
*/
class Buyer { //Зарегестрированный пользователь магазина с личными данными
    constructor(id, FirstName, lastName, patronymic, gender, dateBirth, address) {
        this.id = id;                   //id пользователя
        this.FirstName = FirstName;     //Имя пользователя
        this.lastName = lastName;       //Фамилия пользователя
        this.patronymic = patronymic;   //Отчество пользователя
        this.gender = gender;           //Пол (М/Ж)
        this.dateBirth = dateBirth;     //Дата рождения
        this.address = address;         //Адрес доставки
    }
    bayAllBascet() { } //Производим оплату покупки всех товаров, добавленных в карзину
}

/*
Возможно должен быть реестор совершенных покупок всеми ползователями
*/
class PurchaseRegister {
    constructor() {
        this.perfectPurchase = []; //массив покупок
    }
    registrationBay() { } //метод заносит данные о сделке в массив
}

/*
3. * Некая сеть фастфуда предлагает несколько видов гамбургеров:
a. Маленький (50 рублей, 20 калорий).
b. Большой (100 рублей, 40 калорий).
Гамбургер может быть с одним из нескольких видов начинок (обязательно):
a. С сыром (+10 рублей, +20 калорий).
b. С салатом (+20 рублей, +5 калорий).
c. С картофелем (+15 рублей, +10 калорий).
Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить
майонезом (+20 рублей, +5 калорий).
Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно
использовать примерную архитектуру класса со следующей страницы, но можно использовать
и свою.
*/

let volume1 = [
    { size: "большой", price: 100, calories: 40 },
    { size: "маленьний", price: 50, calories: 20 }
]

let filling1 = [
    { ingredient: "сыр", price: 10, calories: 20 },
    { ingredient: "салат", price: 20, calories: 5 },
    { ingredient: "картофель", price: 15, calories: 10 },
]

let supplement1 = [
    { ingredient: "без добавки", price: 0, calories: 0 },
    { ingredient: "приправа", price: 15, calories: 0 },
    { ingredient: "майонез", price: 20, calories: 5 },
]

class Hamburger {
    constructor(volume = volume1[0], filling = filling1[0], supplement = supplement1[0]) {
        this.volume = volume;
        this.filling = filling
        this.supplement = supplement;
    }

    chooseSize(size) { //выбрать размер гамбургера
        this.volume = volume1[size - 1];
    }
    choosefilling(filling) {  //выбрать начинку
        this.filling = filling1[filling - 1];
    }
    chooseSupplement(supplement) { //выбрать добавку
        this.supplement = supplement1[supplement - 1];
    }
    removeSupplement() { //убрать добавку
        this.supplement = supplement1[0];
    }
    calculatePrice() { //Узнать цену
        return this.volume.price + this.filling.price + this.supplement.price;
    }
    calculateCalories() { //Узнать калорийность
        return this.volume.calories + this.filling.calories + this.supplement.calories;
    }

    CompositionBurger() {
        return `Вы заказали:\n Размер: ${this.volume.size}\n Начинка: ${this.filling.ingredient}\n Добавка: ${this.supplement.ingredient}`
    }

}

let burger = new Hamburger;
burger.chooseSize(prompt("Выберите размер: \n 1 - большой \n 2 - маленький"));
burger.choosefilling(prompt("Выберите начинку: \n 1 - С сыром \n 2 - С салатом \n 3 - С картофелем"));
burger.chooseSupplement(prompt("Выберите добавку: \n 1 - Без добавки \n 2 - С приправой \n 3 - С майонезом"));
burger.removeSupplement();
alert(`Цена вашего бургера ${burger.calculatePrice()}`);
alert(`Каллорийность вашего бургера ${burger.calculateCalories()}`);
alert(burger.CompositionBurger());