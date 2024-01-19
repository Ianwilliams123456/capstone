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
      <b>Your Dungeons and Dragons Character Information is as follows:</b><br><br>
      ${state.char.map(char => {
        return `Your character is a member of the ${char.class} species, has a class of ${char.species} and is ready for ${char.pointlevel} level games`;
      })}<br><br>
      <b>Your army's information is as follows:</b><br><br>
      Warhammer:
      ${state.warmy.map(warmy => {
        return `Your army's faction is ${warmy.faction} and is ready to engage in ${warmy.pointlevel} level battles`;
      })}<br><br>
      XWing:
       ${state.xarmy.map(xarmy => {
         return `Your army's faction is ${xarmy.faction} and is read to engage in conflicts at the ${xarmy.pointlevel} level`;
       })}
      </div>
    </form>
  </main>
`;
