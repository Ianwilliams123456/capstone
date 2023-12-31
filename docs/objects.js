let species = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Halfling",
  "Human",
  "Tiefling"
];

let level = [
  "Local Heroes (1 through 4)",
  "Heroes of the Realm (5 through 10)",
  "Masters of the Realm (11 through 16)",
  "Masters of the World (17 through 20)"
];

function ald() {
  for (let i = 0; i < aldeari.length; i++) {
    let ald = document.createElement("div");
    ald.classList.add("ald");
    ald.innerText = `${aldeari[i]}`;
    document.getElementById("Wsubfaction").appendChild(ald);
  }
}

let aldeari = ["CraftWorlds", "Drukhari", "Ynnari"];

export { species, level, aldeari, ald };
