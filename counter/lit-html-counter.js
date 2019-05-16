import { html, render } from "https://unpkg.com/lit-html@1.0.0/lit-html.js";

class LitHtmlCounter extends HTMLElement {
  state = { count: 0 };

  constructor() {
    super();
    render(this.renderHtml(), this.attachShadow({ mode: "open" }));
  }

  setState = newState => {
    this.state = { ...this.state, ...newState };
    render(this.renderHtml(), this.shadowRoot);
  };

  onDecrementClick = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onIncrementClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  renderHtml = () => html`
    <div>
      <button @click="${this.onDecrementClick}">-</button>
      <p>count: ${this.state.count}</p>
      <button @click="${this.onIncrementClick}">+</button>
    </div>
  `;
}

customElements.define("lit-html-counter", LitHtmlCounter);
