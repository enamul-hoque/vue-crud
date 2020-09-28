import Vue from "vue";
import VueRouter from "vue-router";
import ListPage from "../views/ListPage";
import CreatePage from "../views/CreatePage";
import UpdatePage from "../views/UpdatePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListPage",
    component: ListPage
  },
  {
    path: "/create",
    name: "CreatePage",
    component: CreatePage
  },
  {
    path: "/update",
    name: "UpdatePage",
    component: UpdatePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
