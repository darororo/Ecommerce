<template>
  <h2>Car Details</h2>
  <div class="box">
    <div class="info-item">
      <span>
        <calender />
        <span class="space">Year</span>
      </span>
      <span class="space1">{{ engine.year }}</span>
    </div>
    <div class="info-item">
      <span class="name">
        <Key />
        <span class="space">Number of Owners</span>
      </span>
      <span class="space1">{{ engine.ownerNumbers }}</span>
    </div>
    <div class="info-item">
      <span>
        <location />
        <span class="space">Location</span>
      </span>
      <span class="space1">{{ engine.location }}</span>
    </div>
    <div class="info-item">
      <span>
        <Mileage />
        <span class="space">Mileage</span>
      </span>
      <span class="space1">{{ engine.mileage }} km (0 mi)</span>
    </div>
    <div class="info-item">
      <span>
        <Engine />
        <span class="space">Engine</span>
      </span>
      <span class="space1">{{ engine.cylinder }}</span>
    </div>
    <div class="info-item">
      <span>
        <FuleTpye />
        <span class="space">Fuel Type</span>
      </span>
      <span class="space1">{{ engine.fuelType }}</span>
    </div>
    <div class="info-item">
      <span>
        <Power />
        <span class="space">Power</span>
      </span>
      <span class="space1">{{ engine.power }} hp</span>
    </div>
    <div class="info-item">
      <span>
        <Power />
        <span class="space">Color</span>
      </span>
      <span class="space1">{{ engine.color }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import Calender from "./icons/nameIcon/calender.vue";
import Engine from "./icons/nameIcon/engine.vue";
import FuleTpye from "./icons/nameIcon/fule tpye.vue";
import Key from "./icons/nameIcon/key.vue";
import Location from "./icons/nameIcon/location.vue";
import Mileage from "./icons/nameIcon/mileage.vue";
import Power from "./icons/nameIcon/power.vue";
import { useCarStore } from "../stores/cars";

export default {
  name: "CarInfo",
  components: {
    Calender,
    Engine,
    FuleTpye,
    Key,
    Location,
    Mileage,
    Power,
  },
  data() {
    return {
      carInfo: {
        year: 2021,
        owners: 1,
        location: "Dubai",
        mileage: 0,
        engine: "12 Cylinder",
        fuelType: "Petrol",
        power: 949,
        color: "Cherry",
      },
    };
  },
  computed: {
    ...mapState(useCarStore, {
      car(store) {
        console.log(store.cars[0].brand)
        console.log(this.$route.params.carId)
        return store.getCar(this.$route.params.carId)
      }
    }),
    engine() {
      const engine = this.car.engine;
      if (engine) {
        return engine;
      }
      return {}
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Grey+Qo&family=Moul&family=Moulpali&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap");

h2 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 28px;
  color: black;
  margin: 0;
  padding: 10px 0px 20px 0px;
}

.box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  background-color: white;
  border: 1px solid #dcdfe3;
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  width: 94%;
}

.info-item {
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dcdfe3;
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 0.3s ease-in-out;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08); */
}

.info-item:hover {
  transform: translateY(-5px);
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
}

.space {
  font-weight: 500;
  font-size: 16px;
  margin-left: 8px;
  color: #000000;
}

.space1 {
  margin-left: 8px;
  font-weight: bold;
  color: #333;
}

.info-item span svg {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  transition: fill 0.3s ease;
}

span {
  display: flex;
  align-items: center;
}
</style>
