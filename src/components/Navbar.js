class Navbar {
  constructor() {
    this.isMounted = false;
  }

  render() {
    //create
    const navDiv = document.createElement("nav");
    const titleDiv = document.createElement("div");
    const navLogo = document.createElement("div");

    //ids and classes
    navDiv.id = "nav";
    titleDiv.classList.add("nav-title");
    navLogo.classList.add("nav-logo");

    //innertext and values
    titleDiv.innerText = "Meri Dukaan";

    //append
    navDiv.appendChild(navLogo);
    navDiv.appendChild(titleDiv);

    return navDiv;
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

export { Navbar };
