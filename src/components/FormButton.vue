<script>

export default {
    name: "FormButton",
    props: {
        promotion: Object,
        shopNow: Function,
        bgColor: {
            type: String,
            default: "red"
        },
        label: {
            type: String,
            default: "Summit"
        }
    }
}

</script>

<template>
 
    <div class="th">
        <button @click="Summit" class="btn"> {{ label }} </button>
    </div>

</template>

<style scoped>

.btn {
    background-color: v-bind(bgColor);
    border: none;
    color: aliceblue;
    display: flex;
    width: 165px;
    padding: .4px;
    height: 40px;
    align-items: center;
    justify-content: center;
    gap: .4px;
    border-radius: .25px;
    font-weight: 550;
    cursor: pointer;
    font-family: 'Roboto', serif;
    
    
}

.btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>