import { defineStore } from "pinia";
import ferrariLanding from "@/assets/images/landing-bgs/ferrari/landing.png";
import mercedesLanding from "@/assets/images/landing-bgs/mercedes/landing.png";
import porscheLanding from "@/assets/images/landing-bgs/porsche/landing.png";
import lamborghiniLanding from "@/assets/images/landing-bgs/lamborghini/landing.png";
import bmwLanding from "@/assets/images/landing-bgs/bmw/landing.png";

export const useBrandsStore = defineStore("brands", {
  state: () => ({
    brands: {
      ferrari: {
        landingImg: ferrariLanding,
        cssGradient: "#fecaca",
        bgLetterColor: "black",
        carName: "Ferrari 817",
        bgName: "777",
        firstLink: "GTB",
        secondLink: "LaFerrari",
        thirdLink: "Portofino",
      },
      mercedes: {
        landingImg: mercedesLanding,
        cssGradient: "#bfdbfe",
        bgLetterColor: "black",
        carName: "Mercedes AMG",
        bgName: "728",
        firstLink: "AMG-GT",
        secondLink: "GLE",
        thirdLink: "CLA",
      },
      porsche: {
        landingImg: porscheLanding,
        cssGradient: "#e5e7eb",
        bgLetterColor: "green",
        carName: "Porsche 911",
        bgName: "911",
        firstLink: "Cayenne",
        secondLink: "Taycan",
        thirdLink: "Boxster",
      },
      lamborghini: {
        landingImg: lamborghiniLanding,
        cssGradient: "#fbcfe8",
        bgLetterColor: "black",
        carName: "Lamborghini SVJ",
        bgName: "888",
        firstLink: "Aventador",
        secondLink: "Huracan",
        thirdLink: "Venovo",
      },
      bmw: {
        landingImg: bmwLanding,
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
