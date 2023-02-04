class CartSectionContainer {
    constructor() {
      this.isMounted = false;
    }
  
    render() {
      //create
      const cartSectionContainer = document.createElement("div");
      //ids and classes
      cartSectionContainer.classList.add("cart-section-container");
      //innertexts and values

      return cartSectionContainer;
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
  
  export { CartSectionContainer };
  