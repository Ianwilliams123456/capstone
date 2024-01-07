import html from "html-literal";
export default () => html`
  <main>
    <form id="testerform">
      <label for="tester">Name (4 to 8 characters):</label>
      <input
        type="text"
        id="tester"
        name="name"
        required
        minlength="2"
        maxlength="12"
        size="10"
        method="POST"
        action=""
      />
      <input
        type="submit"
        value="submit"
        name="Submit Name"
        id="testersubmit"
      />
      <div id="testdisplay"></div>
    </form>
  </main>
`;
