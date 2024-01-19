import html from "html-literal";
export default state => html`
  <main>
    <div class="XWingSelectorBoxes">
      <div class="Xfaction">
        Pull factions from api on github
        ${state.xfactions
          .map(
            xfaction => html`
              <div class="xfactions">
                ${xfaction}
              </div>
            `
          )
          .join("")}
      </div>
      <div class="Xlevels">
        For what point level of play is this Army best used?
        ${state.xlevels
          .map(
            xlevel => html`
              <div class="xlevels">
                ${xlevel}
              </div>
            `
          )
          .join("")}
      </div>
      <form id="xform">
      <label for="army submit">Click here to submit!<label><br>
        <input type="submit" value="submit" name="xsubmit" id="xsubmit" />
        <div id="xdisplay"></div>
      </form>
    </div>
  </main>
`;
