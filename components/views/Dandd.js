import html from "html-literal";
export default state => html`
  <main>
    <div class="DandDSelectorBoxes">
      <div class="Race">Pull race from api</div>
      <div class="Class">${state.classes[0].name}</div>
      <div class="Approxlevel">
        Create a drop box/accordian for approximate level
      </div>
      <div class="unused">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
