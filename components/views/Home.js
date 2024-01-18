import html from "html-literal";
import title from "../../docs/images/titlepagepic.jpg";
export default state => html`
  <main>
    <div class="homeSelectorBoxes">
      <div id="appExplanation">
        <img src=${title} alt="Dungeons and Dragons" />
      </div>
    </div>
  </main>
`;
