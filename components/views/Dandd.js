import html from "html-literal";
export default state => html`
  <main>
    <div class="DandDSelectorBoxes">
      <div id="Species">
        Select a Species For This Character
        ${state.races
          .map(
            species => html`
              <div class="races">
                ${species}
              </div>
            `
          )
          .join("")}
      </div>
      <div id="Class">
        Select a ClassFor This Character
      </div>
      <div id="Dapproxlevel">
        Select a Level Range For This Character
      </div>
      <div class="formcollect">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
