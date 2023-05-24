import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import WeatherAppPageVue from "@/views/WeatherAppPage.vue";
import PomodoroAppPage from "@/views/PomodoroAppPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/weatherapp",
    name: "weatherapp",
    component: WeatherAppPageVue,
  },
  {
    path: "/pomodoro",
    name: "pomodoro",
    component: PomodoroAppPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
