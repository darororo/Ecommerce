import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import UserForm from "../components/UserForm.vue";
import CarView from "../views/CarView.vue";
import GalleryImages from "../components/car/GalleryImages.vue";
import Reserve from "../components/checkout/Reserve.vue";
import CustomerDetails from "../components/checkout/CustomerDetails.vue";
import Payment from "../components/checkout/Payment.vue";
import BookmarkPage from "../views/BookmarkPage.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },

    {
      path: "/login",
      component: UserForm,
      props: {
        isCreateForm: false,
      },
    },

    {
      path: "/signup",
      component: UserForm,
      props: {
        isCreateForm: true,
      },
    },

    {
      path: "/car/:carId",
      component: CarView,
      children: [
        {
          path: "gallery",
          component: GalleryImages,
        },
      ],
    },
    {
      path: "/checkout",
      component: Reserve,
      children: [
        {
          path: "customer",
          component: CustomerDetails,
          children: [
            {
              path: "payment",
              component: Payment,
            },
          ],
        },
      ],
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: BookmarkPage,
    },
  ],
});

export default router;
