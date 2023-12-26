import html from "html-literal";
export default state => html`
  <main>
    <div class="homeSelectorBoxes">
      <div class="homeSelectorBoxes" id="appExplanation">
      In the city of ${state.weather.city}
      </div>
      <div class="homeSelectorBoxes" id="armySelector">
      The weather is ${state.weather.description}
      </div>
      <div class="homeSelectorBoxes" id="scheduler">
      The temperature is ${state.weather.temp}F
      </div>
      <div class="homeSelectorBoxes" id="unused">
      it feels like ${state.weather.feelsLike}F
      </div>
  </main>
`;
