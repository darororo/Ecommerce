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
  font-family: "Rajdhani", sans-serif;
  font-size: 16px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  outline: none;
  background-color: #f9fafb;
  color: #111827;
  resize: vertical;
}

.comment-box:focus {
  border: 1px solid #dc2626;
  background-color: #ffffff;
}

.comment-box::placeholder {
  color: #9ca3af;
  font-family: "Rajdhani", sans-serif;
}

.inquire-button {
  font-family: "Rajdhani", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  height: 48px;
  width: 140px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

.bg-green {
  background-color: #16a34a;
}

.bg-red {
  background-color: #dc2626;
}

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
  gap: 12px;
}
</style>
