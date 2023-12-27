import html from "html-literal";
export default () => html`
  <main>
    <div class="XWingSelectorBoxes">
      <ul class="Xfaction">
        Pull factions from api on github
        <li>Rebel Alliance</li>
        <li>Galactic Empire</li>
        <li>Scum and Villainy</li>
        <li>Resistance</li>
        <li>First Order</li>
        <li>Galactic Republic</li>
        <li>Separatist Alliance</li>
      </ul>
      <ul class="XApproxpoints">
        For what point level of play is this Army best used?
        <li>Standard Play (200 pts)</li>
        <li>Epic Play (300 - 500 pts)</li>
      </ul>
      <div class="unused">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
