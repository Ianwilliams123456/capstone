import html from "html-literal";
export default state => html`
  <main>
    <div class="DandDSelectorBoxes">
      <div id="Species">
        Select a Species For This Character
      </div>
      <div id="Class">
        Select a ClassFor This Character
      </div>
      <div id="Dapproxlevel">
        Select a Level Range For This Character
        <!-- <div class="dlevel">Local Heroes (1 through 4)</div>
        <div class="dlevel">Heroes of the Realm (5 through 10)</div>
        <div class="dlevel">Masters of the Realm (11 through 16)</div>
        <div class="dlevel">Masters of the World (17 through 20)</div> -->
      </div>
      <div class="formcollect">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
