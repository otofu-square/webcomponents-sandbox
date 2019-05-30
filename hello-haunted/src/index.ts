import { html, render } from "lit-html";
import { component, useState, useEffect } from "haunted";
import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

const { classes } = jss
  .createStyleSheet({
    wrapper: {
      padding: 40,
      background: "#f7df1e",
      textAlign: "center"
    },
    count: {
      color: "#24292e"
    }
  })
  .attach();

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      console.log("count changed: " + count);
    },
    [count]
  );

  return html`
    <div class="${classes.wrapper}">
      <h1 class="${classes.count}">${count}</h1>
      <div>
        <button type="button" @click="${() => setCount(count + 1)}">+</button>
        <button type="button" @click="${() => setCount(count - 1)}">-</button>
      </div>
    </div>
  `;
}

customElements.define("haunted-counter", component(Counter));

render(
  html`
    <haunted-counter></haunted-counter>
  `,
  document.getElementById("app")
);
