import html from "html-literal";
export default () => html`
  <main>
    <div class="XWingSelectorBoxes">
      <div class="Xfaction">
        Pull factions from api on github
        <div>Rebel Alliance</div>
        <div>Galactic Empire</div>
        <div>Scum and Villainy</div>
        <div>Resistance</div>
        <div>First Order</div>
        <div>Galactic Republic</div>
        <div>Separatist Alliance</div>
      </div>
      <div class="XApproxpoints">
        For what point level of play is this Army best used?
        <div>Standard Play (200 pts)</div>
        <div>Epic Play (300 - 500 pts)</div>
      </div>
      <div class="unused">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
