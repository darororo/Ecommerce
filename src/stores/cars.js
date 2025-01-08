import { defineStore } from "pinia";
import pb from "../lib/pocketbase";

export const useCarStore = defineStore("cars", {
  state: () => ({
    serverConnected: false,
    brands: ["Ferrari", "Mercedes", "Lamborghini", "Porsche", "BMW"],
    cars: [
      {
        id: "1",
        price: 6670088,
        brand: "Ferrari",
        model: "2017 Ferrari LaFerrari",
        description:
          "The LaFerrari features a 6262cc V12 engine built for performance. The LaFerrari is the first production car to ever be equipped with an F1-derived hybrid solution",
        innerDescription: [
          "The LaFerrari features a 6262cc V12 engine built for performance. The LaFerrari is the first production car to ever be equipped with an F1-derived hybrid solution and combines a powerful electric motor with the classic Ferrari V12 engine. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quaerat voluptates animi ad iure eos magnam doloremque. Soluta delectus voluptatibus velit odit, vero quae pariatur, voluptatem sit veniam dicta vitae!",
          "The LaFerrari Aperta is a hypercar with a hybrid powertrain that combines a V12 engine with an electric motor. It was introduced in 2017 to mark Ferrari's 70th anniversary. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed esse quaerat, necessitatibus provident nesciunt repellendus quae fuga omnis explicabo sit sint amet tempora totam quidem et, sequi nisi? Ullam.",
        ],
        images: ["/Ecommerce/src/assets/images/products/car1.png"],
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
        id: "2",
        price: 667008842123,
        brand: "Ferrari",
        model: "Peter Griffin",
        description: "Nyehehehehehe",
        innerDescription: ["hey petah! giggity"],
        images: ["/Ecommerce/src/assets/images/products/car2.png"],
        location: "Steung mean chey, loo lek 8",
      },
      {
        id: "3",
        price: 667008842123,
        brand: "Ferrari",
        model: "Peter Griffin",
        description: "Nyehehehehehe",
        innerDescription: ["hey petah! giggity"],
        images: [
          "/Ecommerce/src/assets/images/products/car4.png",
          "/Ecommerce/src/assets/images/products/car2.png",
        ],
        location: "Steung mean chey, loo lek 8",
      },
    ],
  }),
  getters: {
    getCar: (state) => (id) => state.cars.find((car) => car.id === id),
  },
  actions: {
    async fetchCars() {
      fetch(import.meta.env.VITE_PB_URL)
        .then((res) => {
          console.log(res.status);
        })
        .catch((e) => {
          this.serverConnected = false;
          console.log("FETCH ERROR: " + e);
        });

      try {
        const carsPb = await pb.collection("cars").getFullList();

        console.log(carsPb);

        this.cars = carsPb;
        console.log("CARS POCKETBASE");
        console.log(carsPb);

        console.log("THIS CARS");
        console.log(this.cars);
        console.log(this.cars[0].images[0]);
        console.log(
          this.getImageURL("cars", this.cars[0].id, this.cars[0].images[0])
        );
        this.serverConnected = true;
      } catch (error) {
        this.serverConnected = false;
        console.log(error);
      }
    },
    getImageURL(collectionName, recID, filename) {
      console.log("IS THIS CONNECTED " + this.serverConnected);
      if (!this.serverConnected) {
        console.log(filename);
        return filename;
      }

      return `${
        import.meta.env.VITE_PB_URL
      }/api/files/${collectionName}/${recID}/${filename}`;
    },
  },
});
