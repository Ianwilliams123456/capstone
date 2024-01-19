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
      Your Dungeons and Dragons Character Information is as follows:<br><br><br>
      ${state.char.map(char => {
        return `Species is ${char.species} & Class is ${char.class} & Point Level is ${char.pointlevel}`;
      })}<br><br><br>
      Your armies are as follows:<br><br><br>
        Warhammer:
      ${state.warmy.map(warmy => {
        return `Faction is ${warmy.faction} & Point Level is ${warmy.pointlevel}`;
      })}<br><br>
      XWing:
       ${state.xarmy.map(xarmy => {
         return `Faction is ${xarmy.faction} & Point Level is ${xarmy.pointlevel}`;
       })}
      </div>
    </form>
  </main>
`;
