import html from "html-literal";
export default state => html`
  <main>
    <!-- <form id="testerform">
      <label for="tester">Please enter your name (4 to 8 characters):</label>
      <input
        type="text"
        id="tester"
        name="name"
        required
        minlength="2"
        maxlength="12"
        size="10"
      />
      <input
        type="submit"
        value="submit"
        name="Submit Name"
        id="testersubmit"
      /> -->
      <div id="testdisplay">
        ${state.xarmy
          .map(
            xarmy => html`
              <div class="xarmies">
                ${xarmy}
              </div>
            `
          )
          .join("")}
        ${state.warmy
          .map(
            warmy => html`
              <div class="warmies">
                ${warmy}
              </div>
            `
          )
          .join("")}
        ${state.char
          .map(
            char => html`
              <div class="chars">
                ${char}
              </div>
            `
          )
          .join("")}
      </div>
    </form>
  </main>
`;
