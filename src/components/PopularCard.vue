<template>
    <div class="container">
        <div class="layout-sec">
            <div class="column">
                <div class="header-col">
                    <span>{{ name }}</span>
                    <input class="star" type="checkbox" title="bookmark page" checked>
                </div>
                <div class="sport">Sport</div>
                <Transition 
                appear
                :css="false" 
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                >
                    <div class="popular-car">
                        <img :src="img" loading="lazy" alt="car1">
                    </div>
                </Transition>
                <div class="bg-popular"></div>
                <div class="details">
                    <span>
                        <gas/>
                        <span class="space-txt">90L</span>
                    </span>
                    <span>
                        <GroupPeople/>
                        <span class="space-txt">2 People</span>
                    </span>
                    <span>
                        <speedo/>
                        <span class="space-txt">211 mph</span>
                    </span>
                </div>
                <div class="price-inquire">
                    <button class="btn-price">{{ price }}</button>
                    <button class="btn-buy">Inquire</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import speedo from '@/components/icons/popIcons/speedo.vue';
import gas from '@/components/icons/popIcons/gas.vue';
import GroupPeople from '@/components/icons/popIcons/groupPeople.vue';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
    setup() {
        gsap.registerPlugin(ScrollTrigger);
    },
    props: {
        name: "",
        img: "",
        price: 0,
        themeColor: "red",
        imgHeight: "160px"

    },
    data() {
        return {
            color: this.themeColor || "gray", 
            height: this.imgHeight || "160px"
        }
    },
    components: {
        gas,
        GroupPeople,
        speedo,
    },
    methods: {
        onEnter,
        onBeforeEnter,
    },
    computed: {
        linearGradient() {
            return `linear-gradient(90deg, #ffffff 18%, ${this.color} 100%)`
        }
    }
}

function onBeforeEnter(el) {
    gsap.set(el, {
    x: 250,
  })
}
  
function onEnter(el, done) {
  gsap.to(el, {
    scrollTrigger: {
        trigger: '.popular-car',
        start: '50% 80%',
        // markers: true

    },
    duration: 1.5,
    x: -20,
    ease: 'power2.out',
    onComplete: done
  })
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Rajdhani:wght@300;400;500;600;700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');

.container {
    /* padding: 100px 160px 100px 160px; */
}
.container h1 {
    font-size: 38px;
    font-family: "Raleway", sans-serif;
    font-optical-sizing: auto;
    font-weight: bold;
}
.layout-sec {
    display: flex;
    justify-content: space-between;
    padding: 40px 0px 0px 0px;
}
.column {
    overflow: hidden;
    border: 2px solid #BABABA;
    height: 380px;
    width: 500px;
    border-radius: 10px;
    position: relative;
}
.column .header-col {
    display: flex;
    justify-content: space-between;
    padding: 30px 0px 0px 30px;
    align-items: center;
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    font-weight: 600;
}
.star {
    visibility:hidden;
    font-size: 36px;
    bottom: 20px;
    right: 42px;
    position: relative;
    cursor:pointer;
}
.star::after {
    content: "\2605";
    visibility:visible;
    color: black;
}
.star:checked::after {
    color: #A8A8A8;
    content: "\2606";
}
.sport {
    color: #B8B8B8;
    font-size: 18px;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
    padding: 14px 0px 0px 30px;
}
.popular-car {
    position: absolute;
    left: 45px;
    bottom: 135px;
    overflow: hidden;
}

.popular-car img {
    height: v-bind(height);
    width: auto;
}

.bg-popular {
    position: relative;
    height: 180px;
    width: 620px;
    right: 50px;
    top: 100px;
    background: v-bind(linearGradient);
    /* background: rgb(255,255,255); */
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(165,165,165,1) 100%);
    box-shadow: 0px 6px 5px rgb(190, 190, 190);
    rotate: -22.83deg;
    z-index: -100;
}

.bg-popular-ferrari {
    position: relative;
    height: 180px;
    width: 620px;
    right: 50px;
    top: 100px;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 18%, rgba(255,0,0,1) 100%);
    rotate: -22.83deg;
    z-index: -100;
}
.bg-popular-car3 {
    position: relative;
    height: 180px;
    width: 620px;
    right: 50px;
    top: 100px;
    background: #ffffff;
    background: linear-gradient(90deg, #ffffff 18%, #0066ff 100%);
    rotate: -22.83deg;
    z-index: -100;
}
.details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px 0px 30px;
}

.details span {
    display: flex;
    align-items: center;
}

.space-txt {
    padding: 0px 0px 0px 6px;
    font-family: "Rajdhani", sans-serif;
    font-weight: 400;
    font-size: 20px;
    font-style: normal;
}
.price-inquire {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px 0px 30px;
}
.btn-price {
    border: none;
    border-radius: 0px 10px 0px 0px;
    width: 130px;
    font-family: "Rajdhani", sans-serif;
    background: rgb(255,255,255);
    font-size: 20px;
    font-weight: 500;
    /* background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(165,165,165,1) 100%);     */
    background: v-bind(linearGradient);
    padding: 10px 20px 10px 20px;
    cursor: pointer;
}



.btn-buy {
    padding: 10px 20px 10px 20px;
    width: 130px;
    border: none;
    color: white;
    background-color: v-bind("themeColor");
    font-family: "Raleway", sans-serif;
    border-radius: 0px 10px 0px 10px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}

</style>