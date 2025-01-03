<template>
  <h2>Car Details</h2>
  <div class="box">
    <div class="info-item">
      <span>
        <calender />
        <span class="space">Year</span>
      </span>
      <span class="space1">{{ carInfo.year }}</span>
    </div>
    <div class="info-item">
      <span class="name">
        <Key />
        <span class="space">Number of Owners</span>
      </span>
      <span class="space1">{{ carInfo.owners }}</span>
    </div>
    <div class="info-item">
      <span>
        <location />
        <span class="space">Location</span>
      </span>
      <span class="space1">{{ carInfo.location }}</span>
    </div>
    <div class="info-item">
      <span>
        <Mileage />
        <span class="space">Mileage</span>
      </span>
      <span class="space1">{{ carInfo.mileage }} km (0 mi)</span>
    </div>
    <div class="info-item">
      <span>
        <Engine />
        <span class="space">Engine</span>
      </span>
      <span class="space1">{{ carInfo.engine }}</span>
    </div>
    <div class="info-item">
      <span>
        <FuleTpye />
        <span class="space">Fuel Type</span>
      </span>
      <span class="space1">{{ carInfo.fuelType }}</span>
    </div>
    <div class="info-item">
      <span>
        <Power />
        <span class="space">Power</span>
      </span>
      <span class="space1">{{ carInfo.power }} hp</span>
    </div>
  </div>
</template>

<script>
import Calender from "./icons/nameIcon/calender.vue";
import Engine from "./icons/nameIcon/engine.vue";
import FuleTpye from "./icons/nameIcon/fule tpye.vue";
import Key from "./icons/nameIcon/key.vue";
import Location from "./icons/nameIcon/location.vue";
import Mileage from "./icons/nameIcon/mileage.vue";
import Power from "./icons/nameIcon/power.vue";

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
      },
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Grey+Qo&family=Moul&family=Moulpali&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

h2 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  color: black;
}

.box {
  display: flex;
  justify-content: space-between;
  width: 407.59px;
  height: 350px;
  background-color: white;
  /* border: 1px solid rgba(0, 0, 0, 0.4); */
  /* padding: 20px 40px 20px 40px; */
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

.space {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-left: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
}

.info-item>span {
  display: flex;
  align-items: center;
  margin: 0;
}
</style>
