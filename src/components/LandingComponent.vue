<template>
<div class="bg":style="{backgroundImage: `url(${currBg})`,}">
    <div class="title-wrapper">
        <h4 class="title caudex-bold">Luxury Car</h4>
        <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            of type and scrambled it to make a type specimen book.</p>
    </div>

    <div class="indicator-container">
        <div class="center-container">
            <div class="indicator-wrapper">
                <template v-for="n in bgUrls.length">
                    <div class="indicator" :class="{'indicator-active' : bgIndex===n-1}"></div>
                </template>
                
                <div class="skip-icon">
                    <svg @click="prevImage" class="arrow-btn" width="24" height="16" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.78554 5.24992H20V6.74992H4.78554L11.4905 10.7729L9.72275 11.8335L0 5.99992L9.72275 0.16626L11.4905 1.22692L4.78554 5.24992Z" fill="white" fill-opacity="0.8"/>
                    </svg>
                    <svg @click="nextImg" class="arrow-btn arrow-right" width="24" height="16" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.78554 5.24992H20V6.74992H4.78554L11.4905 10.7729L9.72275 11.8335L0 5.99992L9.72275 0.16626L11.4905 1.22692L4.78554 5.24992Z" fill="white" fill-opacity="0.8"/>
                    </svg>
                </div>
            </div>
            <span>Lorem Ipsum is simply dummy text of the printing</span>
        </div>
    </div>
    
    
</div>

<div class="bg">
    <div class="title-wrapper">
        <h4 class="title caudex-bold">Luxury Car</h4>
        <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            of type and scrambled it to make a type specimen book.</p>
    </div>
</div>
</template>

<script>
import { customRef } from 'vue';


export default {
    data() {
        return {
            bgUrls: [
                "./src/assets/images/landing-bgs/car1.jpeg",
                "./src/assets/images/landing-bgs/car2.png",
                "./src/assets/images/landing-bgs/car3.png",
                "./src/assets/images/landing-bgs/car4.png",
                "./src/assets/images/landing-bgs/car5.png",
            ],
            bgIndex: 0,
        }
    },

    methods: {
        nextImg() {
            if(this.bgIndex == this.bgUrls.length - 1) {
                this.bgIndex = 0;
            } else {
                this.bgIndex = this.bgIndex + 1;
            }
        },
        prevImage() {
            if(this.bgIndex == 0) {
                this.bgIndex = this.bgUrls.length - 1;
            } else {
                this.bgIndex = this.bgIndex - 1;
            }
        }
    },
    computed: {
        currBg() {
            return this.bgUrls[this.bgIndex]
        },
    },

}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quattrocento:wght@400;700&family=Quicksand:wght@300..700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
.bg{
    position: relative;
    height: 100vh;
    background-size: 100% auto;
    padding: 0;
    box-sizing: border-box;
}
.center-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-family: "Roboto Flex", sans-serif;
    font-style: italic;
    font-weight: lighter;
}
.title-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 390px;
    left: 40px;
    bottom: 40px;
    
}

.title {
    color: white;
    font-size: 48px;
    margin: 0;
}

.subtitle {
    color: white;
    font-style: italic;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    font-size: 14px;

}

.indicator-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 52px;
    right: 40px;
}

.indicator-container > div {
    margin: 0;
    padding: 0;
}

.indicator-wrapper {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding-bottom: 14px;
  
}
.skip-icon {
    display: flex; 
    align-items: center;
    padding-left: 20px; 
}
.indicator {
    width: 36px;
    height: 2px;
    background-color: rgb(206, 206, 206);
}

.indicator-active {
    width: 36px;
    height: 4px;
    background-color: white;
}

.arrow-btn {
    cursor: pointer;
    padding-right: 5px;
}


.arrow-right {
    transform: rotate(180deg);
    
}

.caudex-regular {
  font-family: "Caudex", serif;
  font-weight: 400;
  font-style: normal;
}

.caudex-bold {
  font-family: "Caudex", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
}

</style>