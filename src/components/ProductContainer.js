import { CardSectionContainer } from "./CardSectionContainer.js";
import { CartSectionContainer } from "./CartSectionContainer.js";

class ProductContainer {
  constructor() {
    this.isMounted = false;
  }

  render() {
    //create
    const productContainerDiv = document.createElement("div");
    //ids and classes
    productContainerDiv.classList.add("product-container");

    //innertexts and values
    let dataArray = [];

    //cardSection -- contains cards

    const API_URL = "https://fakestoreapi.com/products";
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // data -- array of products
        // load cards
        dataArray = [...data];
        const cardSectionContainer = new CardSectionContainer(dataArray, false);
        cardSectionContainer.mount(productContainerDiv);
      })
      .then(() => {
        // load cart
        const cartSectionContainer = new CartSectionContainer(dataArray, true);
        cartSectionContainer.mount(productContainerDiv);
      })
      .catch((err) => {
        console.log(err);
      });

    //cartSection -- contains cart

    return productContainerDiv;
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

export { ProductContainer };
