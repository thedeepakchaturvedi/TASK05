class Price {
  constructor(price) {
    this.isMounted = false;
    this.price = price;
  }

  render() {
    const priceContainer = document.createElement("div");
    const priceVal = document.createElement("h2");

    priceContainer.classList.add("price-container");
    priceVal.classList.add("price-val");

    priceVal.innerText = `$ ${this.price}`;

    priceContainer.appendChild(priceVal);

    return priceContainer;
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

export { Price };
