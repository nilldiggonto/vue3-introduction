<template>
 <div>
  <h1>Something like that {{ title }}</h1>
  <p class="p-2 bg-success text-white" ref="red">Make me red</p>
  <button class="btn btn-sm btn-danger" @click="handleClick">RED</button>

  <Modal />
 </div>
</template>

<script>
import Modal from './components/Modal.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components:{
      Modal,
    },
  data() {
    return {
      title: "something",
    };
  },
  methods: {
    handleClick() {
      this.$refs.red.classList.add("bg-danger");
      this.$refs.red.focus();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
