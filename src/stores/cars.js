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
        discount: 10,
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
        location: "Ferrari Centre Phnom Penh City, Cambodia",
        status: "Ferrari Approved Pre-Owned",
        financeDetails: {
          interestRate: "2.99 p.a.flat",
        },
      },

      {
        id: "2",
        price: 241300,
        discount: 40,
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
        engine: {
          year: 2019,
          mileage: 13907,
          power: 520,
          ownerNumbers: 1,
          cylinder: 6,
          color: "Red",
          location: "Cambodia",
          fuelType: "Gasoline",
        },
        location: "Porsche Centre Phnom Penh City, Cambodia",
        status: "Porsche Approved Pre-Owned",
      },
      {
        id: "3",
        price: 450000,
        brand: "Lamborghini",
        model: "Lamborghini Aventador Roadster",
        description:
          "The 2014 Lamborghini Aventador LP 700-4 Roadster 2D is a breathtaking supercar that combines extreme performance with striking design and the thrill.",
        innerDescription: [
          "The 2014 Lamborghini Aventador LP 700-4 Roadster 2D is a breathtaking open-top supercar that combines cutting-edge design, extreme performance, and unparalleled luxury. Powered by a 6.5-liter naturally aspirated V12 engine, it delivers an impressive 700 horsepower and 509 lb-ft of torque, enabling it to accelerate from 0 to 60 mph in just 3 seconds and reach a top speed of 217 mph. The car features a 7-speed ISR automated manual gearbox and an all-wheel-drive system, ensuring exceptional handling and stability. Its exterior boasts sharp, angular lines for improved aerodynamics, scissor-style doors, and removable lightweight carbon-fiber roof panels that can be conveniently stored in the front trunk.",
          "Inside, the luxurious cabin is adorned with premium materials such as leather, Alcantara, and carbon fiber, and offers advanced technology, including a digital instrument cluster and infotainment system with navigation. The roadster is equipped with Formula 1-inspired pushrod suspension, carbon-ceramic brakes for precise stopping power, and a quad-pipe exhaust system that amplifies the thrilling roar of the V12 engine. With a lightweight construction and meticulous engineering, the Aventador LP 700-4 Roadster provides a visceral driving experience, making it a true icon of Lamborghini’s commitment to innovation and performance.",
        ],
        images: [
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car1.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car2.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car3.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car4.webp",
          "/Ecommerce/src/assets/images/products/lamborghini-svj/car5.webp",
        ],
        engine: {
          year: 2014,
          mileage: 7946,
          power: 700,
          ownerNumbers: 1,
          cylinder: 12,
          color: "Gray",
          location: "Cambddia",
          fuelType: "Gasoline",
        },
        location: "Lamborghini Centre Phnom Penh City, Cambodia",
        status: "Lamborghini Approved Pre-Owned",
      },
      {
        id: "4",
        price: 92998,
        brand: "BMW",
        discount: 10,
        model: "2024 BMW M3",
        description:
          "The 2024 BMW M3 has received a notable facelift, enhancing both its performance and design. The updated G80 M3 Sedan and G81 M3 Touring models. ",
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
        engine: {
          year: 2024,
          mileage: 8020,
          power: 480,
          ownerNumbers: 1,
          cylinder: 6,
          color: "Gray",
          location: "Cambodia",
          fuelType: "Gasoline",
        },
        location: "BMW Centre Phnom Penh City, Cambodia",
        status: "BMW Approved Pre-Owned",
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
    getDiscountedPrice(price, percentage) {
      return price * ((100 - percentage) / 100);
    },
  },
});
