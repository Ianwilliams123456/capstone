import html from "html-literal";
export default () => html`
  <main>
    <div class="WarhammerSelectorBoxes">
      <ul class="Wfaction">
        Select a Faction for this Army
        <li>Aeldari</li>
        <li>Chaos</li>
        <li>Tyranids</li>
        <li>Imperium</li>
        <li>Leagues of Votann</li>
        <li>Necron</li>
        <li>Orks</li>
        <li>Tau</li>
        <li>Space Marines</li>
      </ul>
      <ul class="Wsubfaction">
        Select a Subfaction for this Army
        <li>Aeldari CraftWorlds</li>
        <li>Aeldari Drukhari</li>
        <li>Aeldari Ynnari</li>
        <li>Chaos Chaos Demons</li>
        <li>Chaos Chaos Knights</li>
        <li>Chaos Chaos Space Marines</li>
        <li>Chaos Death Guard</li>
        <li>Chaos Thousand Sons</li>
        <li>Chaos Chaos Titans /li></li>
        <li>Chaos World Eaters /li></li>
        <li>Tyranids Tyranids</li>
        <li>Tyranids Genestealer Cults</li>
        <li>Imperium Adeptus Sororitas /li></li>
        <li>Imperium Adeptus Custodes</li>
        <li>Imperium Adeptus Mechanicus</li>
        <li>Imperium Titans</li>
        <li>Imperium Agents of the Imperium</li>
        <li>Imperium Astra Militarum</li>
        <li>Imperium Imperial Knights (titans?)</li>
        <li>DSpace Marines Black Templars</li>
        <li>Space Marines Blood Angels</li>
        <li>Space Marines Dark Angels</li>
        <li>Space Marines Deathwatch</li>
        <li>Space Marines Grey Knights</li>
        <li>Space Marines Imperial Fists</li>
        <li>Space Marines Iron Hands</li>
        <li>Space Marines Raven Guard</li>
        <li>Space Marines Salamanders</li>
        <li>Space Marines Homebrew Faction</li>
        <li>Space Marines Space Wolves</li>
        <li>Space Marines Ultramarines</li>
        <li>Space Marines White Scars</li>
      </ul>
      <ul class="Wapproxpoints">
        What is the point value for this Army?
        <li>Combat Patrol (approx 500 pts)</li>
        <li>Incursion (approx 1000 pts)</li>
        <li>Strike Force (approx 2000 pts)</li>
        <li>Onslaught (approx 3000 pts or more)</li>
      </ul>
      <div class="unused">
        I want one continuous filled form across all 3 games
      </div>
    </div>
  </main>
`;
