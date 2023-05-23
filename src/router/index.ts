import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SecondPage from "@/views/SecondPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/first",
    name: "first",
    component: FirstPage,
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
