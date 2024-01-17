function ald() {
  for (let i = 0; i < aldeari.length; i++) {
    let ald = document.createElement("div");
    ald.classList.add("ald");
    ald.innerText = `${aldeari[i]}`;
    document.getElementById("Wsubfaction").appendChild(ald);
    // ald.style.visibility = "hidden";
  }
}

function csm() {
  for (let i = 0; i < chaossm.length; i++) {
    let csm = document.createElement("div");
    csm.classList.add("csm");
    csm.innerText = `${chaossm[i]}`;
    document.getElementById("Wsubfaction").appendChild(csm);
    // csm.style.visibility = "hidden";
  }
}

function tyr() {
  for (let i = 0; i < tyracult.length; i++) {
    let tyr = document.createElement("div");
    tyr.classList.add("tyr");
    tyr.innerText = `${tyracult[i]}`;
    document.getElementById("Wsubfaction").appendChild(tyr);
    // tyr.style.visibility = "hidden";
  }
}

function imp() {
  for (let i = 0; i < imperiman.length; i++) {
    let imp = document.createElement("div");
    imp.classList.add("imp");
    imp.innerText = `${imperiman[i]}`;
    document.getElementById("Wsubfaction").appendChild(imp);
    // imp.style.visibility = "hidden";
  }
}

function spm() {
  for (let i = 0; i < imperism.length; i++) {
    let spm = document.createElement("div");
    spm.classList.add("spm");
    spm.innerText = `${imperism[i]}`;
    document.getElementById("Wsubfaction").appendChild(spm);
    // spm.style.visibility = "hidden";
  }
}
let aldeari = ["CraftWorlds", "Drukhari", "Ynnari"];

let chaossm = [
  "Chaos Daemons",
  "Chaos Knights",
  "Chaos Space Marines",
  "Death Guard",
  "Thousand Sons",
  "World Eaters"
];

let tyracult = ["Tyranids", "Genestealer Cults"];

let imperiman = [
  "Adeptus Sororitas",
  "Adeptus Custodes",
  "Adeptus Mechanicus",
  "Imperial Knights",
  "Agents of the Imperium",
  "Astra Militarum"
];

let imperism = [
  "Black Templars",
  "Blood Angels",
  "Dark Angels",
  "Deathwatch",
  "Grey Knights",
  "Imperial Fists",
  "Iron Hands",
  "Raven Guard",
  "Salamanders",
  "Homebrew Faction",
  "Space Wolves",
  "Ultramarines",
  "White Scars"
];
export { ald, csm, tyr, imp, spm };
