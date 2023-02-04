class Counter {
  constructor(data) {
    this.data = data;
    this.isMounted = false;
    this.count = 0;
    this.data.count = this.count;
  }

  render() {
    const counterDiv = document.createElement("div");
    const decBtn = document.createElement("button");
    const countVal = document.createElement("div");
    const incBtn = document.createElement("button");

    counterDiv.classList.add("counter-container");
    decBtn.classList.add("decBtn");
    countVal.classList.add("count-val");
    incBtn.classList.add("incBtn");

    decBtn.innerText = "-";
    countVal.innerText = this.count;
    incBtn.innerText = "+";

    counterDiv.appendChild(decBtn);
    counterDiv.appendChild(countVal);
    counterDiv.appendChild(incBtn);

    incBtn.addEventListener("click", () => {
      this.count = this.count + 1;
      countVal.innerText = this.count;
      this.data.count = this.count;
    });

    decBtn.addEventListener("click", () => {
      if (this.count > 0) {
        this.count = this.count - 1;
        countVal.innerText = this.count;
        this.data.count = this.count;
      }
    });

    return counterDiv;
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

export { Counter };
