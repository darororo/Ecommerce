import { defineStore } from "pinia";

export const useBrandsStore = defineStore("brands", {
  state: () => ({
    brands: {
      ferrari: {
        landingImg:
          "/Ecommerce/src/assets/images/landing-bgs/ferrari/landing.png",
        cssGradient: "#fecaca",
        bgLetterColor: "black",
        carName: "Ferrari 817",
        bgName: "777",
        firstLink: "GTB",
        secondLink: "LaFerrari",
        thirdLink: "Portofino",
      },
      mercedes: {
        landingImg:
          "/Ecommerce/src/assets/images/landing-bgs/mercedes/landing.png",
        cssGradient: "#bfdbfe",
        bgLetterColor: "black",
        carName: "Mercedes AMG",
        bgName: "728",
        firstLink: "AMG-GT",
        secondLink: "GLE",
        thirdLink: "CLA",
      },
      porsche: {
        landingImg:
          "/Ecommerce/src/assets/images/landing-bgs/porsche/landing.png",
        cssGradient: "#e5e7eb",
        bgLetterColor: "green",
        carName: "Porsche 911",
        bgName: "911",
        firstLink: "Cayenne",
        secondLink: "Taycan",
        thirdLink: "Boxster",
      },
      lamborghini: {
        landingImg:
          "/Ecommerce/src/assets/images/landing-bgs/lamborghini/landing.png",
        cssGradient: "#fbcfe8",
        bgLetterColor: "black",
        carName: "Lamborghini SVJ",
        bgName: "888",
        firstLink: "Aventador",
        secondLink: "Huracan",
        thirdLink: "Venovo",
      },
      bmw: {
        landingImg: "/Ecommerce/src/assets/images/landing-bgs/bmw/landing.png",
        cssGradient: "#e5e7eb",
        bgLetterColor: "black",
        carName: "BMW M4",
        bgName: "888",
        firstLink: "BMW M8",
        secondLink: "BMW i8",
        thirdLink: "BWM m4",
      },
    },
  }),
});
