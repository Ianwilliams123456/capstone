import html from "html-literal";
export default () => html`
  <main>
    <div class="WarhammerSelectorBoxes">
      <div id="Wfaction">
        Select a Faction for this Army
        <div id="ald">Aeldari</div>
        <div id="cha">Chaos</div>
        <div id="tyr">Tyranids</div>
        <div id="imp">Imperium</div>
        <div id="lov">Leagues of Votann</div>
        <div id="nec">Necron</div>
        <div id="ork">Orks</div>
        <div id="tau">Tau</div>
        <div id="spm">Space Marines</div>
      </div>
      <div id="Wsubfaction">
        Select a Subfaction for this Army
        <!-- <div class= "aeldari" id = "craftworld">CraftWorlds</div>
        <div class= "aeldari" id = "drukhari">Drukhari</div>
        <div class= "aeldari" id = "ynnari">Ynnari</div>
        <div class = "chaos" id = "demons">Chaos Demons</div>
        <div class = "chaos" id = "cknights">Chaos Knights</div>
        <div class = "chaos" id = "cspm">Chaos Space Marines</div>
        <div class = "chaos" id = "deathguard">Death Guard</div>
        <div class = "chaos" id = "thousandsons">Thousand Sons</div>
        <div class = "chaos" id = "ctitans">Chaos Titans</div>
        <div class = "chaos" id = "worldeaters">World Eaters</div>
        <div class = "tyranids" id = "genestealers">Genestealer Cults</div>
        <div class = "imperium" id = "sisters">Adeptus Sororitas</div>
        <div class = "imperium" id = "custodes">Adeptus Custodes</div>
        <div class = "imperium" id = "mechanicus">Adeptus Mechanicus</div>
        <div class = "imperium" id = "titans">Titans</div>
        <div class = "imperium" id = "agents">Agents of the Imperium</div>
        <div class = "imperium" id = "guard">Astra Militarum</div>
        <div class = "imperium" id = "iknights">Imperial Knights</div>
        <div class = "spacemarines" id = "blacktemplars">Black Templars</div>
        <div class = "spacemarines" id = "bloodangels">Blood Angels</div>
        <div class = "spacemarines" id = "darkangels">Dark Angels</div>
        <div class = "spacemarines" id = "deathwatch">Deathwatch</div>
        <div class = "spacemarines" id = "greyknights">Grey Knights</div>
        <div class = "spacemarines" id = "imperialfists">Imperial Fists</div>
        <div class = "spacemarines" id = "ironhands">Iron Hands</div>
        <div class = "spacemarines" id = "ravenguard">Raven Guard</div>
        <div class = "spacemarines" id = "salamanders">Salamanders</div>
        <div class = "spacemarines" id = "blacktemplars">Homebrew Faction</div>
        <div class = "spacemarines" id = "spacewolves">Space Wolves</div>
        <div class = "spacemarines" id = "ultramarines">Ultramarines</div>
        <div class = "spacemarines" id = "whitescars">White Scars</div> -->
      </div>
      <div id="Wapproxpoints">
        What is the point value for this Army?
        <div>Combat Patrol (approx 500 pts)</div>
        <div>Incursion (approx 1000 pts)</div>
        <div>Strike Force (approx 2000 pts)</div>
        <div>Onslaught (approx 3000 pts or more)</div>
      </div>
      <div class="unused">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
