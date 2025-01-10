<template>
    <video class="image-bg" autoplay loop muted>
        <source :src="videoSrc" type="video/mp4" />
    </video>

    <div class="header-content">
        <div class="logo-title">
            <img class="logo-img" src="@/assets/images/Logo.png" alt="logo-img" />
            <span>Carbodia</span>
        </div>
        <div class="empty-space"></div>
        <div class="container-btn">
            <RouterLink to="/">
                <button class="login-direction">Go to website</button>
            </RouterLink>
            <RouterLink v-if="!isCreateForm" to="/signup" tag="button">
                <button>Sign Up</button>
            </RouterLink>
            <RouterLink v-else to="/login" tag="button">
                <button>Sign in</button>
            </RouterLink>
        </div>
    </div>

    <!-- Log in  Section-->
    <div class="container">
        <form v-if="!isCreateForm" class="form-sec">
            <div class="form-layout">
                <div class="head-sec">
                    <h2>Sign In</h2>
                    <span>Don't have an account?
                        <strong @click="changeForm">Sign Up</strong></span>
                </div>
                <div class="fill-email">
                    <svg class="icon-style" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 14.974L0 6.14899V17.5H20V6.14899L10 14.974ZM10.001 12.312L0 3.48102V2.5H20V3.48102L10.001 12.312Z"
                            fill="black" fill-opacity="0.7" />
                    </svg>
                    <input type="text" name="fill-input" class="fill-input" placeholder="Email" />
                </div>
                <div class="fill-pass">
                    <svg class="icon-style" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"
                            fill="black" fill-opacity="0.7" />
                    </svg>
                    <input type="password" name="fill-input" class="fill-input-password" placeholder="Password" />
                </div>
            </div>
            <div class="form-check">
                <div class="check-box">
                    <input class="check-box-icon" type="checkbox" />
                    <span>Remember me</span>
                </div>
                <span class="forget-ps">Forget Password?</span>
            </div>
            <div class="btn-sign-in"><button>Sign In</button></div>
            <div class="register">
                <hr />
                <span>or register with</span>
                <hr />
            </div>
            <div class="sign-with">
                <button>
                    <GoogleLogin />
                    Google
                </button>
                <button>
                    <FacebookLogin />
                    Facebook
                </button>
            </div>
        </form>

        <!-- Sign up Section-->
        <form v-else class="form-sec" @submit.prevent="onSubmit">
            <div class="form-layout">
                <div class="head-sec">
                    <h2>Create an account</h2>
                    <span>Don't have an account?
                        <strong @click="changeForm">Sign In</strong></span>
                </div>
                <div class="fname-lname">
                    <div class="fname">
                        <input v-model="firstname" v-bind="firstnameProps" type="text" class="fill-fname-lname"
                            placeholder="First Name" />
                        <p class="text-error"> {{ errors.firstname }} </p>
                    </div>
                    <div class="lname">
                        <input v-model="lastname" v-bind="lastnameProps" type="text" class="fill-fname-lname"
                            placeholder="Last Name" />
                        <p class="text-error"> {{ errors.lastname }} </p>

                    </div>
                </div>
                <div class="fill-email">
                    <svg class="icon-style" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 14.974L0 6.14899V17.5H20V6.14899L10 14.974ZM10.001 12.312L0 3.48102V2.5H20V3.48102L10.001 12.312Z"
                            fill="black" fill-opacity="0.7" />
                    </svg>
                    <input v-model="email" v-bind="emailProps" type="text" name="fill-input" class="fill-input"
                        placeholder="Email" />
                    <p class="text-error"> {{ errors.email }} </p>
                </div>
                <div class="fill-pass">
                    <svg class="icon-style" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"
                            fill="black" fill-opacity="0.7" />
                    </svg>
                    <input v-model="password" v-bind="passwordProps" type="password" name="fill-input"
                        class="fill-input-password" placeholder="Password" />
                    <p class="text-error">{{ errors.password }}</p>
                </div>
            </div>
            <div class="form-check">
                <div class="check-box">
                    <input v-model="termsChecked" class="check-box-icon" type="checkbox" />
                    <span>I agree to the</span>
                    <strong>Terms & conditions</strong>
                </div>
            </div>
            <div class="btn-sign-up" :class="{ 'btn-disabled': !termsChecked }"><button>Sign Up</button></div>
            <div class="register">
                <hr />
                <span>or register with</span>
                <hr />
            </div>
            <div class="sign-with">
                <button>
                    <GoogleLogout />
                    Google
                </button>
                <button>
                    <FacebookLogout />
                    Facebook
                </button>
            </div>
        </form>
    </div>

</template>

<script>
import videoSrc from "@/assets/videos/Car1.mp4";
import GoogleLogin from "@/components/icons/auth/GoogleLogin.vue";
import FacebookLogin from "@/components/icons/auth/FacebookLogin.vue";
import GoogleLogout from "@/components/icons/auth/GoogleLogout.vue";
import FacebookLogout from "@/components/icons/auth/FacebookLogout.vue";

import { useForm } from 'vee-validate';
import { string } from 'yup';

export default {
    setup() {

        const emailValidator = string().required("Email is required").email();
        const passwordValidator = string().required("Passowrd is required").min(8, "Password must be at least 8 characters");
        const firsnameValidator = string().required("First name is required");
        const lastnameValidator = string().required("Last name is required");

        const { defineField, handleSubmit, errors } = useForm({
            validationSchema: {
                email: emailValidator,
                password: passwordValidator,
                firstname: firsnameValidator,
                lastname: lastnameValidator,
            }
        });

        const [email, emailProps] = defineField('email');
        const [password, passwordProps] = defineField('password');
        const [firstname, firstnameProps] = defineField('firstname');
        const [lastname, lastnameProps] = defineField('lastname');

        const onSubmit = handleSubmit(values => {
            console.log(values);
        });

        return {
            errors,
            onSubmit,
            email,
            emailProps,
            password,
            passwordProps,
            firstname,
            firstnameProps,
            lastname,
            lastnameProps
        }

    },
    components: {
        GoogleLogin,
        FacebookLogin,
        GoogleLogout,
        FacebookLogout,
    },
    props: {
        isCreateForm: Boolean,
    },
    data() {
        return {
            videoSrc,
            isLoggedIn: false,
            skipItems: Array(5).fill(null),
            activeIndex: 0,
            termsChecked: false,
        };
    },
    methods: {
        changeForm() {
            this.isCreateForm = !this.isCreateForm;
            this.isLoggedIn = !this.isLoggedIn;
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap");
@import url("https://fonts.cdnfonts.com/css/yapari-trial");
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap");

a {
    text-decoration: none;
    color: black;
}

.container {
    position: absolute;
    left: 50%;
    /* padding-top: 0px; */
}

.container form {
    position: relative;
    left: -50%;
}

.image-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
    z-index: -1;
}

.form-sec {
    height: auto;
    width: 600px;
    background-color: white;
    border: 0px solid rgb(104, 103, 103);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.form-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.head-sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto Serif";
    text-align: center;
    line-height: 24px;
    padding-bottom: 40px;
}

h2 {
    font-size: 40px;
    font-weight: normal;
}

.head-sec span {
    font-size: 14px;
}

.head-sec strong {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.fill-input {
    width: 330px;
    height: 32px;
    border: 2px solid 000000;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-family: "Roboto Serif";
    font-size: 14px;
}

.fill-input-password {
    width: 330px;
    height: 32px;
    border: 2px solid 000000;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-family: "Roboto Serif";
    font-size: 14px;
}

.fill-email input[type="text"] {
    padding-right: 40px;
}

.fill-pass input[type="password"] {
    padding-right: 40px;
}

.icon-style {
    position: absolute;
    cursor: pointer;
    margin-top: 5px;
    margin-left: 18vw;
}

.fill-email {
    padding-bottom: 40px;
}

.fill-pass {
    padding-bottom: 15px;
}

.form-check {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.forget-ps {
    cursor: pointer;
}

.check-box {
    display: flex;
    align-items: center;
}

.check-box-icon {
    height: 18px;
    width: 18px;
    color: black;
    border: 1px solid black;
    border-radius: 2px;
}

.check-box span {
    padding-left: 10px;
}

.btn-sign-in {
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

.btn-sign-up {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.btn-sign-up button {
    height: 50px;
    width: 380px;
    border: none;
    background-color: #636871;
    border-radius: 5px;
    color: white;
    font-family: "Roboto Serif";
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}

.btn-sign-in button {
    height: 50px;
    width: 380px;
    border: none;
    background-color: #636871;
    border-radius: 5px;
    color: white;
    font-family: "Roboto Serif";
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}

.btn-disabled {
    cursor: not-allowed;
}

.register {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 30px 0;
}

.register hr {
    width: 140px;
    border: none;
    margin: 0;
    border-top: 1px solid #ccc;
}

.register span {
    font-size: 14px;
    color: #666;
}

.sign-with {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 100px 0px 100px;
}

.sign-with button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #666;
    background-color: white;
    cursor: pointer;
}

.icon {
    padding-right: 8px;
}

.fill-fname-lname {
    width: 160px;
    height: 32px;
    border: 2px solid 000000;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    font-family: "Roboto Serif";
    font-size: 14px;
}

.fname-lname {
    display: flex;
    align-items: flex-start;
    padding-bottom: 40px;
}

.fname input[type="text"] {
    padding-right: 0px;
}

.lname input[tpe="text"] {
    padding-right: 0px;
}

.fname {
    padding: 0px 46px 0px 0px;
}

.check-box strong {
    text-decoration: underline;
    padding-left: 10px;
    font-family: "Roboto Serif";
    font-size: 14px;
    color: rgb(73, 73, 253);
    cursor: pointer;
    padding-right: 100px;
}

.header-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92px;
    text-align: center;
}

.empty-space {
    background-color: rgb(255, 255, 255);
    height: 31px;
    width: 400%;
    align-self: flex-start;
}

.container-btn {
    display: flex;
    background-color: rgb(255, 255, 255);
    align-items: center;
    height: 100px;
    padding: 0px 20px 0px 0px;
    width: auto;
    align-items: center;
    column-gap: 20px;
}

.container-btn::after {
    content: "";
    display: block;
    position: absolute;
    width: 50px;
    right: 310px;
    border-radius: 0% 30% 0% 0%;
    height: 122.5px;
    background-color: rgb(255, 255, 255);
    rotate: 130deg;
    clip-path: polygon(34% 0, 100% 0, 100% 100%, 0% 100%);
}

.container-btn::before {
    content: "";
    display: block;
    position: absolute;
    width: 175px;
    border-bottom-left-radius: 30px;
    right: 155px;
    height: 100px;
    background-color: rgb(255, 255, 255);
}

.container-btn .login-direction {
    position: relative;
}

.logo-img {
    width: 75px;
    height: 59px;
}

.logo-title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-family: "Goldman", sans-serif;
    background-color: rgb(255, 255, 255);
    height: 100px;
    font-size: 30px;
    width: auto;
    padding: 0px 30px 0px 30px;
    column-gap: 20px;
}

.logo-title::before {
    content: "";
    display: block;
    position: absolute;
    left: 310px;
    width: 50px;
    border-radius: 0% 0% 30% 0%;
    height: 122.5px;
    background-color: rgb(255, 255, 255);
    rotate: 50deg;
}

.logo-title::after {
    content: "";
    display: block;
    position: absolute;
    left: 291px;
    top: 0;
    width: 60px;
    height: 45px;
    background-color: rgb(255, 255, 255);
}

.header-content button {
    background: transparent;
    border: 1px solid black;
    height: 50px;
    width: 125px;
    color: black;
    border-radius: 10px;
    font-weight: bold;
    font-family: "Quattrocento Sans", sans-serif;
    font-size: 16px;
    cursor: pointer;
}

.footer-skip {
    position: absolute;
    left: -50%;
    margin-top: 40px;
    color: white;
    font-size: 24px;
    font-family: "Yapari Variable Trial", sans-serif;
    font-weight: normal;
}

.footer-skip {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.skip-form {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
}

.indicator {
    width: 44px;
    height: 6px;
    border-radius: 10px;
    background-color: rgb(88, 88, 88);
    transition: all 0.3s ease-in-out;
}

.indicator-active {
    background-color: white;
}

.text-error {
    color: red;
}
</style>
