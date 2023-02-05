import { CartItems } from "./CartItems.js";

class CartSectionContainer {
  constructor(data, isCart) {
    this.isMounted = false;
    this.data = data;
    this.isCart = isCart;
    this.totalAmount = 0;
    this.totalItems = 0;
    this.cartItemsData = [];
  }
  render() {
    //create

    const cartSectionContainer = document.createElement("div");
    const cartImgDiv = document.createElement("div");
    const refreshButton = document.createElement("button");
    const detailsBlock = document.createElement("div");
    const totalAmountDiv = document.createElement("div");
    const totalItemDiv = document.createElement("div");
    const cartItemsDiv = document.createElement("div");

    //ids and classes
    cartSectionContainer.classList.add("cart-section-container");
    cartImgDiv.classList.add("cart-img");
    refreshButton.classList.add("refresh-btn");
    detailsBlock.classList.add("cart-details");
    totalAmountDiv.classList.add("amount-val");
    totalItemDiv.classList.add("item-val");
    cartItemsDiv.classList.add("cart-items");

    //innertexts and values
    refreshButton.innerText = "Refresh Cart";
    totalAmountDiv.innerText = `Total Amount : $${this.totalAmount}`;
    totalItemDiv.innerText = `Total Items : ${this.totalItems}`;

    //append
    cartSectionContainer.appendChild(cartImgDiv);
    cartSectionContainer.appendChild(refreshButton);
    cartSectionContainer.appendChild(detailsBlock);
    detailsBlock.appendChild(totalItemDiv);
    detailsBlock.appendChild(totalAmountDiv);
    cartSectionContainer.appendChild(cartItemsDiv);

    refreshButton.addEventListener("click", () => {
      //render cards
      // adding element in cart that are not present already
      this.data.forEach((ele) => {
        if (ele.count > 0) {
          if (!this.cartItemsData.includes(ele)) {
            this.cartItemsData.push(ele);
          }
        }
      });

      //update the cart details
      this.updateCartDetails(totalAmountDiv, totalItemDiv);

      //delete the previous list
      if (cartItemsDiv.childNodes.length > 0) {
        cartItemsDiv.childNodes[0].remove();
      }
      // render the updated list
      if (this.cartItemsData.length > 0) {
        const cartItem = new CartItems(this.cartItemsData, this.isCart);
        cartItem.mount(cartItemsDiv);
      }
    });

    return cartSectionContainer;
  }

  updateCartDetails(totalAmountDiv, totalItemDiv) {
    let item = 0;
    let amount = 0;

    this.cartItemsData.forEach((ele) => {
      item = item + ele.count;
      amount = amount + ele.price * ele.count;
    });

    this.totalItems = item;
    this.totalAmount = amount;

    totalAmountDiv.innerText = `Total Amount : $${this.totalAmount}`;
    totalItemDiv.innerText = `Total Items : ${this.totalItems}`;
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
