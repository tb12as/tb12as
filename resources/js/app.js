import "./bootstrap";

import { createApp } from "vue";

import router from "./router/index.js";

import "./portfolio/style.css";
import App from "./views/App.vue";
import VueFeather from "vue-feather";

import mixin from "./mixin.js";

// configure magic mouse
import { magicMouse } from "magicmouse.js";
magicMouse({
    outerStyle: "circle",
    hoverEffect: "circle-move",
    hoverItemMove: true,
    defaultCursor: false,
    outerWidth: 65,
    outerHeight: 65,
});

const app = createApp(App)
    .use(router)
    .component(VueFeather.name, VueFeather)
    .mixin(mixin)
    .mount("#app");
