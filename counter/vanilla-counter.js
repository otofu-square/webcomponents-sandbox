class VanillaCounter extends HTMLElement {
  state = { count: 0 };

  setState(state) {
    this.state = state;
  }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    const counter = document.createElement("p");
    counter.textContent = `count: ${this.state.count}`;

    incrementButton.addEventListener("click", () => {
      this.setState({ count: this.state.count + 1 });
      counter.textContent = `count: ${this.state.count}`;
    });

    decrementButton.addEventListener("click", () => {
      this.setState({ count: this.state.count - 1 });
      counter.textContent = `count: ${this.state.count}`;
    });

    shadow.appendChild(wrapper);
    wrapper.appendChild(decrementButton);
    wrapper.appendChild(counter);
    wrapper.appendChild(incrementButton);
  }
}

customElements.define("vanilla-counter", VanillaCounter);
