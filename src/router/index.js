import { createRouter, createWebHistory, useRoute } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import { getCurrentUser } from "vuefire";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Home" },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true, title: "Dashboard" },
    },
  ],
});

router.beforeEach(async (to) => {
  const user = await getCurrentUser();
  to.meta.user = user;
  document.title = `${to.meta.title}`;
  if (to.meta.requiresAuth && !user) return { name: "home" };
});

export default router;
