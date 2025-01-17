import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CarView from "../views/CarView.vue";
import GalleryImages from "../components/car/GalleryImages.vue";
import Reserve from "../components/checkout/Reserve.vue";
import CustomerDetails from "../components/checkout/CustomerDetails.vue";
import Payment from "../components/checkout/Payment.vue";
import BookmarkPage from "../views/BookmarkPage.vue";
import BrandLanding from "../components/landingPage/BrandLanding.vue";
import UserForm from "../components/users/UserForm.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
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
      name: "car",
      component: CarView,
      children: [
        {
          path: "gallery",
          component: GalleryImages,
        },
      ],
    },
    {
      path: "/checkout/:carId",
      component: Reserve,
      name: "checkout",
      children: [
        {
          path: "customer",
          component: CustomerDetails,
          name: "customer-details",
          children: [
            {
              path: "payment",
              component: Payment,
              name: "payment",
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
    {
      path: "/brand/:brandName",
      name: "brand",
      component: HomePage,
    },
  ],
});

export default router;
