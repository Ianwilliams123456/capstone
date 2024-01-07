import html from "html-literal";
export default () => html`
  <main>
    <div class="WarhammerSelectorBoxes">
      <div id="Wfaction">
        Select a Faction for this Army
        <div id="aldselect">Aeldari</div>
        <div id="chaselect">Chaos</div>
        <div id="tyrselect">Tyranids</div>
        <div id="impselect">Imperium</div>
        <div id="lovselect">Leagues of Votann</div>
        <div id="necselect">Necron</div>
        <div id="orkselect">Orks</div>
        <div id="tauselect">Tau</div>
        <div id="spmselect">Space Marines</div>
      </div>
      <div id="Wsubfaction">
        Select a Subfaction for this Army
      </div>
      <div id="Wapproxpoints">
        What is the point value for this Army?
        <div>Combat Patrol (approx 500 pts)</div>
        <div>Incursion (approx 1000 pts)</div>
        <div>Strike Force (approx 2000 pts)</div>
        <div>Onslaught (approx 3000 pts or more)</div>
      </div>
      <div class="unused">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
