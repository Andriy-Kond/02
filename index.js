const instruments = [
	{
		id: 1,
		img: "https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg",
		name: "Молоток",
		price: 150,
	},
	{
		id: 2,
		img: "https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg",
		name: "Перфоратор",
		price: 3000,
	},
	{
		id: 3,
		img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg",
		name: "Рівень",
		price: 2000,
	},
];

const cards = document.querySelector(".list");
const basket = document.querySelector(".basket");
const arrBasket = [];
let qty = 0;

const markUp = instruments.map(({ id, name, price, img }) => {
	return `
  <li class="item" data-id="${id}">
      <img src="${img}" alt="${name}" width = "300"/>
      <h2>${name}</h2>
      <p>${price}</p>
      <button class = "button">Купити</button>
    </li>
  `;
});

console.log(markUp);
cards.insertAdjacentHTML("beforeend", markUp);

cards.addEventListener("click", fnBuy);
basket.addEventListener("click", fnConsole);

function fnBuy(e) {
	if (!e.target.classList.contains("button")) {
		return;
	}
	const item = e.target.closest(".item");
	const id = Number(item.dataset.id);
	const currentProduct = {
		...instruments.find((product) => product.id === id), //створюємо копію масиву, щоби не змінювати вихідний
	};
	const inBasket = arrBasket.find((item) => item.id === id);
	if (inBasket) {
		inBasket.qty += 1;
	} else {
		currentProduct.qty = 1;
		arrBasket.push(currentProduct);
	}
}

function fnConsole() {
	console.log(arrBasket);
	console.log(instruments);
}
