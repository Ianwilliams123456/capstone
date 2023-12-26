import html from "html-literal";
export default () => html`
  <main>
    <div class="scheduleSelectorBoxes">
      <div class="scheduler">Schedule Page</div>
      <div class="schedulerArmySelector">Army Selector</div>
      <div class="day" id="Monday">Monday</div>
      <div class="day" id="Tuesday">Tuesday</div>
      <div class="day" id="Wednesday">Wednesday</div>
      <div class="day" id="Thursday">Thursday</div>
      <div class="day" id="Friday">Friday</div>
      <div class="day" id="Saturday">Saturday</div>
      <div class="day" id="Sunday">Sunday</div>
      <div class="sidebar">I want this running down the side</div>
    </div>
  </main>
`;
