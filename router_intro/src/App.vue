<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name:'About'}">About</router-link> |
    <router-link :to="{name:'Jobs'}">Jobs</router-link>
  <br>
    <button class="btn btn-sm btn-primary" @click="redirect">redirect</button>
    <button class="btn btn-sm btn-primary" @click="back">Prev</button>
    <button class="btn btn-sm btn-primary" @click="next">Next</button>



  <router-view/>

  </div>
</template>

<script>
export default {
  methods: {
    redirect(){
      this.$router.push({name:'Home'})
    },
    back(){
      this.$router.go(-1)
    },
    next(){
      this.$router.go(+1)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
