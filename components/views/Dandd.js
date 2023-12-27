import html from "html-literal";
export default state => html`
  <main>
    <div class="DandDSelectorBoxes">
      <ul class="Species">
        Select a Species For This Character
        <li>Dragonborn</li>
        <li>Dwarf</li>
        <li>Elf</li>
        <li>Gnome</li>
        <li>Half-Elf</li>
        <li>Half-Orc</li>
        <li>Halfling</li>
        <li>Human</li>
        <li>Tiefling</li>
      </ul>
      <ul class="Class">
        Select a ClassFor This Character
        <li>${state.classes[0].name}</li>
        <li>${state.classes[1].name}</li>
        <li>${state.classes[2].name}</li>
        <li>${state.classes[3].name}</li>
        <li>${state.classes[4].name}</li>
        <li>${state.classes[5].name}</li>
        <li>${state.classes[6].name}</li>
        <li>${state.classes[7].name}</li>
        <li>${state.classes[8].name}</li>
        <li>${state.classes[9].name}</li>
        <li>${state.classes[10].name}</li>
        <li>${state.classes[11].name}</li>
      </ul>
      <ul class="Dapproxlevel">
        Select a Level Range For This Character
        <li>Local Heroes (1 through 4)</li>
        <li>Heroes of the Realm (5 through 10)</li>
        <li>Masters of the Realm (11 through 16)</li>
        <li>Masters of the World (17 through 20)</li>
      </ul>
      <div class="formcollect">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
