<template>
<div class="wrapper">
    <div class="container">
        <div class="menu-btn">
            <svg class="burger-svg" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" :fill="textColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            <p class="goldman-regular">Carbodia</p> 
        </div>
        <div class="search-wrapper">
            <div class="search">
                <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>     
                <input type="text" class="search-bar" placeholder="Search"></input>
            </div>
        </div>        
        <LoginButton :textColor="textColor"/>
    </div>

    <div class="brand-navs">
        <div class="brand">
            <div>
                <FerrariNavIcon :color="textColor" :width="'20px'" :height="'24px'"/>
            </div>
            <p class="quattrocento-bold">Ferrari</p>
        </div>
        <div class="brand">
            <div>
                <MercedesNavIcon :color="textColor" :width="'20px'" :height="'24px'"/>
            </div>
            <p class="quattrocento-bold">Mercedes</p>
        </div>
        <div class="brand">
            <div>
                <PorscheNavIcon :color="textColor" :width="'20px'" :height="'24px'"/>
            </div>
            <p class="quattrocento-bold">Porsche</p>
        </div>
        <div class="brand">
            <div>
                <LamboNavIcon :color="textColor" :width="'20px'" :height="'24px'"/>
            </div>
            <p class="quattrocento-bold">Lamboghini</p>
        </div>
        <div class="brand">
            <div>
                <BmwNavIcon :color="textColor" :width="'20px'" :height="'24px'"/>
            </div>
            <p class="quattrocento-bold">BMW</p>
        </div>
    </div>

</div>

</template>

<script>
import BmwNavIcon from './icons/NavIcons/BmwNavIcon.vue';
import FerrariNavIcon from './icons/NavIcons/FerrariNavIcon.vue';
import LamboNavIcon from './icons/NavIcons/LamboNavIcon.vue';
import MercedesNavIcon from './icons/NavIcons/MercedesNavIcon.vue';
import PorscheNavIcon from './icons/NavIcons/PorscheNavIcon.vue';
import LoginButton from './LoginButton.vue';
export default {
    components: {
        FerrariNavIcon,
        MercedesNavIcon,
        PorscheNavIcon,
        BmwNavIcon,
        LamboNavIcon,
        LoginButton
    },
    props: {
        textColor: {
            default: "white"
        },
        bgColor: {
            default: "transparent"
        },
        borderColor: "gray"
    }
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quattrocento:wght@400;700&family=Quicksand:wght@300..700&display=swap");

.wrapper {
    position: fixed;
    width: 100%;
    z-index: 168;
    background: v-bind(bgColor);
    /* box-shadow: 0 2px 6px rgb(196, 185, 185); */
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 65px;
}

.search {
    position: relative;
    width: auto;
}

.search > input {
    padding-left: 2.5rem;
    box-sizing: border-box;
    width: 35vw;
}

.search-icon {
    position: absolute;
    width: 16px;
    top: 8px;
    left: 12px;
    color: grey;
}

.search-bar {
    height: 30px;
    width: 500px;
    border: none;
    border-radius: 20px;
    padding: 1rem;
    box-sizing: border-box;
    border: 1px solid;
    border-color: v-bind(borderColor);
    /* background-color: purple; */
}

.menu-btn {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    color: v-bind(textColor);
}

.menu-btn > p {
    font-size: 1.8rem;
    color: v-bind(textColor);
}


.burger-svg {
    position: absolute;
    left: -44px; 
}

.brand-navs {
    padding: 1.2rem 0 1.2rem 0;
    height: 12px;
    display: flex;
    justify-content: center;
    column-gap: 4rem;
    border: 1px solid;
    border-color: v-bind(borderColor);
    border-right: none;
    border-left: none;
}

.brand-navs > .brand {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    cursor: pointer;
}

.brand > p {
    position: relative;
    font-size: 14px;
    bottom: 2px;
    color: v-bind(textColor);
}

.goldman-regular {
  font-family: "Goldman", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.goldman-bold {
  font-family: "Goldman", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.quattrocento-sans-regular {
  font-family: "Quattrocento Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.quattrocento-bold {
  font-family: "Quattrocento", serif;
  font-weight: 700;
  font-style: normal;
}

</style>
