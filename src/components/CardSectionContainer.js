import { ProductCard } from "./ProductCard.js";

class CardSectionContainer {
  constructor(data, forCart) {
    this.isMounted = false;
    this.data = data;
    this.forCart = forCart;
  }

  render() {
    //create
    const cardSectionContainer = document.createElement("div");
    //ids and classes
    cardSectionContainer.classList.add("card-section-container");
    //innertexts and values

    this.data.forEach(element => {
        const card = new ProductCard(element, this.forCart);
        card.mount(cardSectionContainer);
    });
    
    return cardSectionContainer;
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

export { CardSectionContainer };
