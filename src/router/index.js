import { createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/home.vue";
import NotFound from "@/views/notFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homeView,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  { path: "/:pathMatch(.*)", redirect: { name: "NotFound" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
