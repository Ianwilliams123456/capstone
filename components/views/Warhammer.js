import html from "html-literal";
export default state => html`
  <main>
    <div class="WarhammerSelectorBoxes">
      <div id="Wfaction">
        Select a Faction for this Army
        ${state.wfactions
          .map(
            wfaction => html`
              <div class="wfactions">
                ${wfaction}
              </div>
            `
          )
          .join("")}
      </div>
      <!-- <div id="Wsubfaction">
        Select a Subfaction for this Army
        ${state.aldearis
        .map(
          aldeari => html`
            <div class="aldearis" style="visibility: hidden;">
              ${aldeari}
            </div>
          `
        )
        .join("")}
        ${state.chaossms
        .map(
          chaossm => html`
            <div class="chaossms" style="display: none;">
              ${chaossm}
            </div>
          `
        )
        .join("")}
        ${state.imperimans
        .map(
          imperiman => html`
            <div class="imperimans" style="display: none;">
              ${imperiman}
            </div>
          `
        )
        .join("")}
        ${state.imperisms
        .map(
          imperism => html`
            <div class="imperisms" style="display: none;">
              ${imperism}
            </div>
          `
        )
        .join("")}
        ${state.tyracults
        .map(
          tyracult => html`
            <div class="tyracults" style="display: none;">
              ${tyracult}
            </div>
          `
        )
        .join("")}
      </div> -->
      <div id="Wapproxpoints">
        What is the point value for this Army?
        ${state.wlevels
          .map(
            wlevelgroup => html`
              <div class="wlevels">
                ${wlevelgroup}
              </div>
            `
          )
          .join("")}
      </div>
      <form id="wform">
        <input type="submit" value="submit" name="wsubmit" id="wsubmit" />
        <div id="wdisplay"></div>
      </form>
    </div>
  </main>
`;
