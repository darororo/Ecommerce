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
        images: [
          "/Ecommerce/src/assets/images/products/Ferrari-Laferrari/car1.png",
          "/Ecommerce/src/assets/images/products/Ferrari-Laferrari/car2.png",
          "/Ecommerce/src/assets/images/products/Ferrari-Laferrari/car3.png",
          "/Ecommerce/src/assets/images/products/Ferrari-Laferrari/car4.png",
          "/Ecommerce/src/assets/images/products/Ferrari-Laferrari/car5.png",
        ],
        engine: {
          year: 2017,
          mileage: 0,
          power: 949,
          ownerNumbers: 1,
          cylinder: 12,
          color: "Red",
          location: "Dubai",
          fuelType: "Petrol",
        },
        location: "Phnom Penh City, Cambodia",
      },
      {
        id: "2",
        price: 241300,
        brand: "Porsche",
        model: "2019 Porsche 911 GT3 RS RWD",
        description:
          "Every GT3 interpretation possesses a naturally aspirated 4.0-liter flat-six that makes between 500 and 520 horsepower as it shrieks to a 9000-rpm redline.",
        innerDescription: [
          "launting a huge rear wing, giant air intakes, and fender-filling wheels and tires, there's no mistaking the Porsche 911 GT3 for anything but the track-ready racer it is. Still not satisfied? The Porsche 911 GT3 RS turns up the wick with further performance and visual enhancements. Last but certainly not least, the low-volume Porsche 911 Speedster is essentially a convertible version of the excellent GT3.",
          "launting a huge rear wing, giant air intakes, and fender-filling wheels and tires, there's no mistaking the Porsche 911 GT3 for anything but the track-ready racer it is. Still not satisfied? The Porsche 911 GT3 RS turns up the wick with further performance and visual enhancements. Last but certainly not least, the low-volume Porsche 911 Speedster is essentially a convertible version of the excellent GT3.",
        ],
        images: [
          "/Ecommerce/src/assets/images/products/Porsche-rwd-911/car1.jpg",
          "/Ecommerce/src/assets/images/products/Porsche-rwd-911/car2.jpg",
          "/Ecommerce/src/assets/images/products/Porsche-rwd-911/car3.jpg",
          "/Ecommerce/src/assets/images/products/Porsche-rwd-911/car4.jpg",
          "/Ecommerce/src/assets/images/products/Porsche-rwd-911/car5.jpg",
          "/Ecommerce/src/assets/images/products/Porsche-rwd-911/car6.jpg",
        ],
        location: "Phnom Penh City, Cambodia",
      },
      {
        id: "3",
        price: 503679,
        brand: "Lamborghini",
        model: "Lamborghi Aventador SV",
        description:
          "It's Lambo's most powerful V-12, and it leverages optimized variable valve timing, a new exhaust system, and a higher redline (now 8500 rpm, up from 8350).",
        innerDescription: [
          "That’s what we were promised by, of all things, a PowerPoint slide during the presentation of the new 2016 Lamborghini Aventador SV as we geared up for some lap time at Spain’s Circuit de Barcelona-Catalunya. It’s not often we see “crazy,” with all it implies, during a press presentation, especially by a company hocking its own product, but there it was.",
          "It’s Lambo’s most powerful V-12, and it leverages optimized variable valve timing, a new exhaust system, and a higher redline (now 8500 rpm, up from 8350) to raise output to 740 horsepower at 8400 rpm. Torque remains at the same level as in the non-SV Aventador: 509 lb-ft at 5500 rpm. But while the dorsal-finned Veneno’s calling card was its crazy styling, the Superveloce is intended solely to circle a racetrack as quickly as possible.",
        ],
        images: [
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car1.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car2.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car3.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car4.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car5.webp",
        ],
        location: "Phnom Penh City, Cambodia",
      },
      {
        id: "4",
        price: 92998,
        brand: "BMW",
        model: "2024 BMW M3",
        description:
          "The 2024 BMW M3 is a sport sedan that comes so close to being perfect. The all-wheel-drive system gives you confidence in poor weather, plus heaps of grip for explosive acceleration. ",
        innerDescription: [
          "The 2024 BMW M3 for sale is poised to impress with its powerful performance and sophisticated design. Now available at South BMW, this competitive sedan offers TwinPower Turbo technology, along with a bold exterior and a comfortable 2024 BMW M3 interior. While you can browse 2024 BMW M3 images online, we invite you to experience the impressive 2024 BMW M3 specs firsthand at our BMW dealership in Miami, FL. Get in touch with us today.",
          "Prepare for an exhilarating driving experience with the 2024 BMW M3 for sale. The base configuration boasts a powerful 473-horsepower 3.0L inline 6-cylinder BMW M TwinPower Turbo engine, generating 406 lb-ft of torque. It is paired with a 6 speed manual transmission and rear-wheel drive. The sport exhaust system with quad tailpipes and chrome-plated exhaust tips adds to the excitement.",
        ],
        images: [
          "/Ecommerce/src/assets/images/products/BMW-M3/car1.webp",
          "/Ecommerce/src/assets/images/products/BMW-M3/car2.webp",
          "/Ecommerce/src/assets/images/products/BMW-M3/car3.webp",
          "/Ecommerce/src/assets/images/products/BMW-M3/car4.webp",
          "/Ecommerce/src/assets/images/products/BMW-M3/car5.webp",
        ],
        location: "Phnom Penh City, Cambodia",
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
