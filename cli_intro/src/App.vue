<template>
 <div>
  <h1>Something like that {{ title }}</h1>
  <p class="p-2 bg-success text-white my" ref="red">Make me red</p>
  <button class="btn btn-sm btn-danger" @click="handleClick">RED</button>

  <!-- <Modal header="something like that" :mylist="" /> -->
  <div v-if="showModal">
    <Modal :myheader="myheader" theme="red" @close="toggleModal">
      <h4>This is slot</h4>

      <template v-slot:links>
        <div>
          <span class="badge badge-info">Name Slot</span>
        </div>
      </template>
    </Modal> 
  </div>
  <button class="btn btn-sm btn-success" @click="toggleModal">show me</button>




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
      myheader:"My Header",
      showModal:false,
    };
  },
  methods: {
    handleClick() {
      this.$refs.red.classList.add("bg-danger");
      this.$refs.red.focus();
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
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
