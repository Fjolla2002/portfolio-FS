import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

router.beforeEach((_, _2, next) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  next();
});

export default router;
