import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import FirstPage from "@/views/FirstPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: FirstPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
