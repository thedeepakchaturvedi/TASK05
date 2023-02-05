import { ProductCard } from "./ProductCard.js";

class CartItems {
  constructor(cart, isCart) {
    this.cart = cart;
    this.isCart = isCart;
    this.isMounted = false;
  }

  render() {
    const cartItemContainer = document.createElement("div");

    cartItemContainer.classList.add("cart-items-container");

    this.cart.forEach((ele) => {
      const card = new ProductCard(ele, this.isCart);
      card.mount(cartItemContainer);
    });

    return cartItemContainer;
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

export { CartItems };
