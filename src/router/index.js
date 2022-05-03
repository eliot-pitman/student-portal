import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from "../views/LogIn.vue";
import StudentsIndex from "../views/StudentsIndex.vue";
import LogOut from "../views/LogOut.vue";
import StudentShow from "../views/StudentShow.vue";
import StudentCreate from "../views/StudentCreate.vue";
import StudentEdit from "../views/StudentEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LogIn,
  },
  {
    path: "/index",
    name: "index",
    component: StudentsIndex,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogOut,
  },
  {
    path: "/students",
    name: "students-show",
    component: StudentShow,
  },
  {
    path: "/create",
    name: "Create",
    component: StudentCreate,
  },
  {
    path: "/edit",
    name: "edit",
    component: StudentEdit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
