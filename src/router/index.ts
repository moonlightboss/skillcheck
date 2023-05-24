import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SecondPage from "@/views/SecondPage.vue";
import WeatherAppPageVue from "@/views/WeatherAppPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/weatherapp",
    name: "weatherapp",
    component: WeatherAppPageVue,
  },
  {
    path: "/second",
    name: "second",
    component: SecondPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
