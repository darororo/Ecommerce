<template>
    <div class="bg">
        <div class="showcase-wrapper">
            <div class="showcase">
                <template v-for="(bg, index) in bgUrls" :key="index">
                    <div class="showcase-item">
                        <img :src="bg" loading="lazy" alt="">
                    </div>
                </template>
            </div>
        </div>
        <!-- <transition name="fade" mode="in-out" @after-leave="bgNext"> 
            <img :key="currBg" :src="currBg" alt="">
        </transition> -->
        <!-- <img :src="currBg" alt=""> -->
        <div class="title-wrapper">
            <h4 class="title caudex-bold">Luxury Car</h4>
            <p class="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                of type and scrambled it to make a type specimen book.</p>
        </div>

        <div class="indicator-container">
            <div class="center-container">
                <div class="indicator-wrapper">
                    <template v-for="n in bgUrls.length">
                        <transition name="fade" mode="out-in">
                        <div class="indicator" :class="{'indicator-active' : bgIndex===n-1}"></div>
                        </transition>
                    </template>
                    
                    <div class="skip-icon">
                        <svg @click="prevImage" class="arrow-btn prev" width="24" height="16" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.78554 5.24992H20V6.74992H4.78554L11.4905 10.7729L9.72275 11.8335L0 5.99992L9.72275 0.16626L11.4905 1.22692L4.78554 5.24992Z" fill="white" fill-opacity="0.8"/>
                        </svg>
                        <svg @click="nextImg" class="arrow-btn arrow-right next" width="24" height="16" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.78554 5.24992H20V6.74992H4.78554L11.4905 10.7729L9.72275 11.8335L0 5.99992L9.72275 0.16626L11.4905 1.22692L4.78554 5.24992Z" fill="white" fill-opacity="0.8"/>
                        </svg>
                    </div>
                </div>
                <span>Lorem Ipsum is simply dummy text of the printing</span>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';


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
            firstLoad: true,
            bgIndex: 0,
        }
    },

    methods: {
        nextImg() {
            this.firstLoad = false;

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
        },
        bgNext(el) {
            this.nextImg()
            
        },
    horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
            }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            curIndex = 0,
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
            totalWidth,
            curX,
            distanceToStart,
            distanceToLoop,
            item,
            i;
        gsap.set(items, {
            // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
            xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            console.log(w);
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
            },
        });
        gsap.set(items, { x: 0 });
        totalWidth =
            items[length - 1].offsetLeft +
            (xPercents[length - 1] / 100) * widths[length - 1] -
            startX +
            items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
            (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = (xPercents[i] / 100) * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
            )
            .fromTo(
                item,
                {
                xPercent: snap(
                    ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                ),
                },
                {
                xPercent: xPercents[i],
                duration:
                    (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }
            const toIndex = (index, vars) => {
                vars = vars || {};
                Math.abs(index - curIndex) > length / 2 &&
                (index += index > curIndex ? -length : length); // always go in the shortest direction
                let newIndex = gsap.utils.wrap(0, length, index),
                time = times[newIndex];
                if (time > tl.time() !== index > curIndex) {
                // if we're wrapping the timeline's playhead, make the proper adjustments
                vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
                time += tl.duration() * (index > curIndex ? 1 : -1);
                }
                curIndex = newIndex;
                this.bgIndex = newIndex;
                vars.overwrite = true;
                return tl.tweenTo(time, vars);
            }
            tl.next = (vars) => toIndex(curIndex + 1, vars);
            tl.previous = (vars) => toIndex(curIndex - 1, vars);
            tl.current = () => curIndex;
            tl.toIndex = (index, vars) => toIndex(index, vars);
            tl.times = times;
            tl.progress(1, true).progress(0, true); // pre-render for performance
            if (config.reversed) {
                tl.vars.onReverseComplete();
                tl.reverse();
            }

            console.log(totalWidth);
            return tl;
        }
    },
    computed: {
        currBg() {
            return this.bgUrls[this.bgIndex]
        },
    },
    mounted() {
        // const beginSlide = setInterval(() => {
        //     if(this.firstLoad) {
        //         this.nextImg();
        //     }
        //     clearInterval(beginSlide);
        // }, 5000)

        const boxes = gsap.utils.toArray(".showcase-item"),
        loop = this.horizontalLoop(boxes, { paused: true });

        // add click listeners so you can click a box to have it move to the first slot
        boxes.forEach((box, i) =>
        box.addEventListener("click", () =>
            loop.toIndex(i, { duration: 1, ease: "power1.inOut" })
        )
        );

        // make the "next" and "previous" buttons call the appropriate methods on the timeline
        document
        .querySelector(".next")
        .addEventListener("click", () =>
            loop.next({ duration: 1, ease: "power1.inOut" })
        );
        document
        .querySelector(".prev")
        .addEventListener("click", () =>
            loop.previous({ duration: 1, ease: "power1.inOut" })
        );
    }

}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quattrocento:wght@400;700&family=Quicksand:wght@300..700&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
.bg-test{
    position: relative;
    height: 100vh;
    background-size: 100% auto;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
}

.showcase-wrapper {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
}

.showcase {
    height: 100%;
    width: 450%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.showcase-item {
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: purple;
}

.showcase-item > img {
    width: auto;
    height: 100%;
}



.bg{
    background-color: gold;
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
/* .bg > img {
    position: absolute;
    z-index: -100;
    width: 100%;
    height: auto;
} */

.fade-enter-from, .fade-leave-to{
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1.5s ease-in;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
}

.title-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 390px;
    left: 120px;
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
    right: 120px;
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
    transition: background-color 1s ease;
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