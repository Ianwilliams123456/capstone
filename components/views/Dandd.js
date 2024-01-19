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
        ${state.classes
          .map(
            dclass => html`
              <div class="classes">
                ${dclass.name}
              </div>
            `
          )
          .join("")}
      </div>
      <div id="Dapproxlevel">
        Select a Level Range For This Character
        ${state.dlevels
          .map(
            levelgroup => html`
              <div class="dlevels">
                ${levelgroup}
              </div>
            `
          )
          .join("")}
      </div>
      <form id="dform">
        <label for="army submit">Click here to submit!<label><br>
        <input type="submit" value="submit" name="dsubmit" id="dsubmit" />
        <div id="ddisplay"></div>
      </form>
    </div>
  </main>
`;
