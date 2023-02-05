import { ProductCard } from "./ProductCard.js";

class CartItems {
  constructor(cart, isCart) {
    this.cart = cart;
    this.isCart = isCart;
    this.isMounted = false;
  }

  render() {
    // deleting those element whose count is 0 after modification inside the cart item list

    this.cart.forEach((ele, ind) => {
      if (ele.count == 0) {
        this.cart.splice(ind, 1);
      }
    });
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
