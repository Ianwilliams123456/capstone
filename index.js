import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();
}

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();

// const homedesc =
//   "Welcome to Digimeets.com, your ultimate destination for hassle-free tabletop gaming planning! Plan your week of epic battles seamlessly with our intuitive website, allowing you to select armies and characters and then schedule Warhammer 40,000, X-Wing Miniatures, and Dungeons and Dragons sessions";

// document.getElementById("appExplanation").innerHTML = homedesc;
