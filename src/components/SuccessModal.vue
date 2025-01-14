<template>
    <div class="success-card">
        <div class="success-header">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="white">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="white" stroke-width="2" />
                    <path d="M8 12l2 2 4-4" fill="none" stroke="white" stroke-width="2" />
                </svg>
            </div>
            <h2>SUCCESS</h2>
        </div>
        <div class="success-body">
            <p class="success-message">The Car Is Yours!</p>
            <button class="success-button" @click="handleContinue">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "success-body",
    methods: {
        handleContinue() {
            this.$router.push({ name: 'home' })
        }
    }
};
</script>

<style scoped>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.success-card {
    width: 350px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
}

.success-header {
    background-color: #4caf50;
    padding: 20px 15px;
    color: #fff;
}

.success-header .icon {
    margin-bottom: 10px;
}

.success-header h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.success-body {
    padding: 20px;
}

.success-body p {
    margin: 15px 0;
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
}

.continue-btn {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.continue-btn:hover {
    background-color: #4caf50;
}

.success-button {
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.success-button:hover {
    background-color: #45a049;
}
</style>