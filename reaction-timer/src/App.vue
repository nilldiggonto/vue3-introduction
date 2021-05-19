<template>
 <div>
    <h1>Reaction</h1>

    <button class="btn btn-success" @click="start" :disabled="isPlaying" >START</button>

    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <!-- <p class="mt-2 bg-info text-white p-2" v-if="showResults">Reaction time: {{ score }} ms</p> -->
    <Results v-if="showResults" :score="score" />
 </div>

</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Block,
    Results
  },
  data() {
    return {
      isPlaying : false,
      delay : null,
      score : null,
      showResults: false,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
      // console.log(this.delay)
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
      // this.show
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
  margin-top: 60px;
}
</style>
