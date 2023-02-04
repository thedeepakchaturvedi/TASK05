import { Navbar } from "./components/Navbar.js";
import { ProductContainer } from "./components/ProductContainer.js";

class App {
  constructor() {
    this.isMounted = false;
  }

  render() {
    //create
    const appDiv = document.createElement("div");
    //ids and classes
    appDiv.id = "app";

    //innertext and values

    //navBar
    const nav = new Navbar();
    nav.mount(appDiv);

    //productContainer -- contains cardSection and cartSection
    const productContainer = new ProductContainer();
    productContainer.mount(appDiv);

    return appDiv;
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

// singleton class
const app = new App();

export { app };
