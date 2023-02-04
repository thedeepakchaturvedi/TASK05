import { Price } from "./Price.js";
import { Counter } from "./Counter.js";

class ProductCard {
  constructor(data, forCart) {
    this.data = data;
    this.isMounted = false;
    this.forCart = forCart;
  }

  render() {
    //create
    const cardContainer = document.createElement("div");
    const productImg = document.createElement("div");
    const productName = document.createElement("div");

    //classes and ids
    cardContainer.classList.add("card-container");
    productImg.classList.add("product-img");
    productName.classList.add("product-name");

    //innertexts and values
    productImg.style.backgroundImage = `url(${this.data.image})`;
    productName.innerText = this.data.title;

    //append
    cardContainer.appendChild(productImg);
    cardContainer.appendChild(productName);

    const priceComponent = new Price(this.data.price);
    priceComponent.mount(cardContainer);

    if (!this.forCart) {
      const counter = new Counter(this.data);
      counter.mount(cardContainer);
    }

    return cardContainer;
  }

  mount(el) {
    if (this.isMounted) {
      return;
    }

    this.isMounted = true;
    if (el) {
      el.appendChild(this.render());
      return;
    }
    document.body.appendChild(this.render());
  }
}

export { ProductCard };
