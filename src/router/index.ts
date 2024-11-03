import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import WorkView from "../views/WorkView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import EducationView from "../views/EducationView.vue";
import ContactView from "../views/ContactView.vue";
import WorkDetailView from "../views/WorkDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/work",
      name: "work",
      component: WorkView,
      children: [
        {
          path: ":title",
          name: "work-detail",
          component: WorkDetailView,
        },
      ],
    },
    {
      path: "/experience",
      name: "experience",
      component: ExperienceView,
    },
    {
      path: "/education",
      name: "education",
      component: EducationView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

router.beforeEach((_, _2, next) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  next();
});

export default router;
