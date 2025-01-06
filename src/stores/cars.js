import { defineStore } from "pinia";

export const useCarStore = defineStore("cars", {
  state: () => ({
    brands: ["Ferrari", "Mercedes", "Lamborghini", "Porsche", "BMW"],
    cars: [
      {
        id: 1,
        price: 6670088,
        brand: "Ferrari",
        model: "2017 Ferrari LaFerrari",
        description:
          "The LaFerrari features a 6262cc V12 engine built for performance. The LaFerrari is the first production car to ever be equipped with an F1-derived hybrid solution",
        innerDescription: [
          "The LaFerrari features a 6262cc V12 engine built for performance. The LaFerrari is the first production car to ever be equipped with an F1-derived hybrid solution and combines a powerful electric motor with the classic Ferrari V12 engine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quaerat voluptates animi ad iure eos magnam doloremque. Soluta delectus voluptatibus velit odit, vero quae pariatur, voluptatem sit veniam dicta vitae!",
          "The LaFerrari Aperta is a hypercar with a hybrid powertrain that combines a V12 engine with an electric motor. It was introduced in 2017 to mark Ferrari's 70th anniversary. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed esse quaerat, necessitatibus provident nesciunt repellendus quae fuga omnis explicabo sit sint amet tempora totam quidem et, sequi nisi? Ullam.",
        ],
        images: ["./src/assets/images/products/car1.png"],
        engine: {
          year: 2021,
          mileage: 0,
          power: 949,
          ownerNumbers: 1,
          cylinder: 12,
          color: "Cherry",
          location: "Dubai",
          fuelType: "Petrol",
        },
        location: "Steung mean chey, loo lek 9",
      },
      {
        id: 2,
        price: 667008842123,
        brand: "Ferrari",
        model: "Peter Griffin",
        description: "Nyehehehehehe",
        innerDescription: ["hey petah! giggity"],
        images: ["./src/assets/images/products/car2.png"],
        location: "Steung mean chey, loo lek 8",
      },
      {
        id: 2,
        price: 667008842123,
        brand: "Ferrari",
        model: "Peter Griffin",
        description: "Nyehehehehehe",
        innerDescription: ["hey petah! giggity"],
        images: ["./src/assets/images/products/car2.png"],
        location: "Steung mean chey, loo lek 8",
      },
      {
        id: 2,
        price: 667008842123,
        brand: "Ferrari",
        model: "Peter Griffin",
        description: "Nyehehehehehe",
        innerDescription: ["hey petah! giggity"],
        images: ["./src/assets/images/products/car2.png"],
        location: "Steung mean chey, loo lek 8",
      },
      {
        id: 2,
        price: 667008842123,
        brand: "Ferrari",
        model: "Peter Griffin",
        description: "Nyehehehehehe",
        innerDescription: ["hey petah! giggity"],
        images: ["./src/assets/images/products/car2.png"],
        location: "Steung mean chey, loo lek 8",
      },
    ],
  }),
  getters: {
    getCar: (state) => (id) => state.cars.find((car) => car.id === id),
  },
});
