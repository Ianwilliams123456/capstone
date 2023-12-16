import html from "html-literal";
export default links => html`
  <nav>
      <div class = "navText">DIGIMEETS</div>
      <ul class="a">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
      </div>
  </nav>
`;
