<template>
    <div class="search">
        <h1>Bookmarked(4)</h1>
        <div class="Search">
            <span class="search-icon material-symbols-outlined">search</span>
            <input class="search-input" type="search" placeholder="Search">
        </div>
    </div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search" />
</template>

<script>
export default {
    name: "HeaderSearch",
};
</script>

<style>
.search {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 14px;
    border-radius: 28px;
}

.search h1 {
    margin-right: 40px;
}

.Search {
    background-color: #e9e3e3;
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 600px; 
    padding: 14px;
    border-radius: 10px;
    margin-right: 50px;
    position: relative; 
}

.search-icon {
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 24px; 
}



.search-input {
    font-size: 16px;
    font-family: 'Lexend', sans-serif;
    color: #333333;
    outline: none;
    border: none;
    background: transparent;
    text-align: center; 
    flex: 1;
}

.search-input::placeholder,
.search-icon{
    color: rgb(0,0,0,0.25);

}
</style>
