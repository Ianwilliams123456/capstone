import html from "html-literal";
import dragon from "../../docs/images/danddpic.jpg";
import warhammer from "../../docs/images/warhammerpic.jpg";
import xwing from "../../docs/images/xwingpic.jpg";
export default () => html`
  <main>
    <div class="gameSelectorBoxes">
      <div id="XWingpic">
        <img src=${xwing} alt="Dungeons and Dragons" />
      </div>
      <div id="Warhammer40kpic">
        <img src=${warhammer} alt="Dungeons and Dragons" />
      </div>
      <div id="Danddpic">
        <img src=${dragon} alt="Dungeons and Dragons" />
      </div>
    </div>
  </main>
`;
