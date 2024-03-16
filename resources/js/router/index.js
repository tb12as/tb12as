import { createRouter, createWebHistory } from "vue-router";

import portfolio from "./portfolio.js";
const routes = [...portfolio];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
