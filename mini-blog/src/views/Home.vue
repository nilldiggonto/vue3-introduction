<template>
  <div class="home">
    <h4>Home</h4>
    <!-- <p ref="p">The name is {{name}} and age is {{age}}</p>
    <button @click="handleClick">click here</button>
    <input type="text" v-model="name"> -->
    <!-- <h2>Refs</h2>
    <p>{{one.name}} and age is {{one.age}}</p>
    <button @click="updateOne">Change</button>
    <hr>
    <h2>Reactive</h2>
    <p>{{two.name}} and age is {{two.age}}</p>
    <button @click="updateTwo">Change</button> -->
    <input type="text" v-model="search">
    <p>{{search}}</p>
    <hr>
    <p v-for="name in matchingNames" :key="name">
      {{name}}
    </p>


  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive , computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {

    // const p = ref(null)
    // const name = ref('something')
    // const age = ref(20)
    // const handleClick = () =>{
    //   // console.log('clicked')
    //   // p.value.classList.add('test')
    //   // p.value.textContent = 'new refrences'
    //   name.value = 'changed'
    // }
    // return {name,age,handleClick,p}


    //
    // const one = ref({name:'one',age:20})
    // const two = reactive({name:'someone',age:30})

    // const updateOne = () =>{
    //   one.value.age = 30
    // }

    //   const updateTwo = () =>{
    //   two.age = 15
    // }

    const search = ref('')
    const names = ref(['one','two','three','four','five'])

    watch(search, ()=> {
      console.log('ok')
    })

    watchEffect(()=>{
      console.log(search.value)
    })


    const matchingNames = computed(()=>{
      return names.value.filter( (name)=> name.includes(search.value))
    })

    return {names,search,matchingNames}

  },

 
}
</script>
