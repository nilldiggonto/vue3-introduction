<template>
  <div class="backdrop_c" @click.self="closeModal">
    <div class="modal_c" :class="{red: theme === 'red'}">
      <h1>{{myheader}}</h1>
      <p>POPUP CONTENT</p>
      <slot></slot>
      <slot name="links"></slot>

    </div>
  </div>
</template>


<script>
export default {
  props: ['myheader','theme'],
  methods:{
    closeModal(){
      this.$emit('close')
    }
  }
  // data(){
  //   return {
  //     titie
  //   }
  // }
}
</script>


<style scoped>
.modal_c {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: rgb(2, 85, 67);
  color:aliceblue;
  border-radius: 10px;
}

.backdrop_c {
  top: 0;
  position: fixed;
  background:rgb(190 179 179 / 93%);
  width: 100%;
  height: 100%;
  z-index: 1;
  /* opacity: 2; */
}
</style>