import { html, render } from "lit-html";
import { component, useState } from "haunted";

function Counter() {
  const [count, setCount] = useState(0);
  return html`
    <div id="count">${count}</div>
    <button type="button" @click="${() => setCount(count + 1)}">
      Increment
    </button>
  `;
}

customElements.define("remember-april", component(Counter));

render(
  html`
    <remember-april></remember-april>
  `,
  document.getElementById("app")
);
