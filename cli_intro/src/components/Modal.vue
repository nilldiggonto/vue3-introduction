<template>
  <div class="backdrop_c">
    <div class="modal_c">
      <p>POPUP CONTENT</p>
    </div>
  </div>
</template>


<style>
.modal_c {
  width: 200px;
  padding: 20px;
  margin: 100px auto;
  background: rgb(2, 85, 67);
  color:aliceblue;
  border-radius: 10px;
}

.backdrop_c {
  top: 0;
  position: fixed;
  background: rgb(190, 179, 179);
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>