import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import { dspecies, dlevel, ald, csm, tyr, imp, spm } from "./docs/objects";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Nav(store.Links)}
  ${Header(state)}
  ${Main(state)}
  ${Footer()}
  `;

  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  if (state.view === "Dandd") {
    for (let i = 0; i < state.classes.length; i++) {
      let classapi = document.createElement("div");
      classapi.classList.add("classapi");
      classapi.innerText = `${state.classes[i].name}`;
      document.getElementById("Class").appendChild(classapi);
    }
    for (let i = 0; i < dspecies.length; i++) {
      let Species = document.createElement("div");
      Species.classList.add("race");
      Species.innerText = `${dspecies[i]}`;
      document.getElementById("Species").appendChild(Species);
    }
    for (let i = 0; i < dlevel.length; i++) {
      let dlevel = document.createElement("div");
      dlevel.classList.add("dlevel");
      dlevel.innerText = `${dlevel[i]}`;
      document.getElementById("Dapproxlevel").appendChild(dlevel);
    }
  }

  if (state.view === "Warhammer") {
    ald();
    csm();
    tyr();
    imp();
    spm();
  }

  if (state.view === "Testerifneeded") {
    document.getElementById("testersubmit").addEventListener("click", event => {
      event.preventDefault();

      const requestData = document.getElementById("tester").value;
      console.log(requestData);

      axios
        // Make a POST request to the API to create a new pizza
        .post(`http://localhost:4040/army`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Testerifneeded.testarmy.push(response.data);
          console.log(store.Testerifneeded.testarmy[0].value);
          router.navigate("/Scheduler");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
      // document.getElementById("testdisplay").innerText =
      //   store.testarmy;
    });
  }
}

//     );
//   }
// }

//   document.getElementById("tyr").addEventListener("click", event +> {
//      event.preventDefault.Default();
// })
// }
//   document.getElementById("imp").addEventListener("click", event +> {
//      event.preventDefault.Default();
// })
// }
//   document.getElementById("lov").addEventListener("click", event +> {
//      event.preventDefault.Default();
// })
// }
//   document.getElementById("nec").addEventListener("click", event +> {
//      event.preventDefault.Default();
// })
// }
//   document.getElementById("ork").addEventListener("click", event +> {
//      event.preventDefault.Default();
// })
// }
//   document.getElementById("tau").addEventListener("click", event +> {
//      event.preventDefault.Default();
// })
// }
//   document.getElementById("spm").addEventListener("click", event +> {
//      event.preventDefault.Default();
// })
// }
router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=portland`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            console.log(store.Home.weather);

            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;

      //Add a case for each view that needs data from an API
      case "Dandd":
        // New Axios get request utilizing already made environment variable
        axios
          // .all([
          // axios.get(`https://www.dnd5eapi.co/api/races/`),
          .get(`https://www.dnd5eapi.co/api/classes/`)
          // ])
          .then(response => {
            // We need to store the response to the state, in the next step but in the meantime
            //   let's see what it looks like so that we know what to store from the response.
            // for (let i = 0; i < 12; i++);
            // store.Dandd.class = {
            //   index: response.data.index,
            //   name: response.data.name
            // };
            store.Dandd.classes = response.data.results;
            console.log(store.Dandd.classes);

            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      // case "Products":
      //   axios.get("https://fakestoreapi.com/products").then(response => {
      //     // store.Products.products = response.data.map(product => {
      //     //   return {
      //     //     title: product.title + " matsinet",
      //     //     image: product.image
      //     //   };
      //     // });
      //     store.Products.products = response.data;

      //     done();
      //   });
      //   break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

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
