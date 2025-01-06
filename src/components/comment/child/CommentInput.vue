<template>
  <div>
    <textarea
      class="comment-box"
      placeholder="I love cars!"
      rows="4"
      name=""
      id=""
    ></textarea>
    <div class="btn-wrapper">
      <button class="inquire-button bg-green">Submit</button>
      <button class="inquire-button bg-red">Cancel</button>
    </div>
  </div>
</template>

<style scoped>
.comment-box {
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  padding: 20px;
  box-sizing: border-box;
}

.inquire-button {
  display: inline-block;
  background-color: #045a09;
  color: white;
  height: 50px;
  width: 160px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0px 10px 0px 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.bg-green {
  background-color: #00bb09;
}

.bg-red {
  background-color: #db0000;
}

.btn-wrapper {
  display: flex;
  justify-content: end;
  padding: 10px 0px 10px 0px;
  column-gap: 30px;
}
</style>
Now I understand that's you are weird XD
