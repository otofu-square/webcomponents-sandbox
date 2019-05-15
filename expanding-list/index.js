class ExpandingList extends HTMLUListElement {
  constructor() {
    super();

    window.onLoad = () => {
      const uls = Array.from(document.querySelectorAll(":root ul"));
      uls.slice(1).forEach(ul => {
        ul.style.display = "none";
      });

      const lis = Array.from(document.querySelectorAll(":root li"));
      lis.forEach(li => {
        const childText = li.childNodes[0];

        const newSpan = document.createElement("span");
        newSpan.textContent = childText.textContent;

        childText.parentNode.insertBefore(newSpan, childText);
        childText.parentNode.removeChild(childText);
      });

      function showul(e) {
        const nextul = e.target.nextElementSibling;

        if (nextul.style.display == "block") {
          nextul.style.display = "none";
          nextul.parentNode.setAttribute("class", "closed");
        } else {
          nextul.style.display = "block";
          nextul.parentNode.setAttribute("class", "open");
        }
      }

      const spans = Array.from(document.querySelectorAll(":root span"));
      spans.forEach(span => {
        if (span.nextElementSibling) {
          span.style.cursor = "pointer";
          span.parentNode.setAttribute("class", "closed");
          span.onclick = showul;
        }
      });
    };
  }
}

customElements.define("expanding-list", ExpandingList, { extends: "ul" });
