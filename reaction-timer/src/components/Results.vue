<template>
   <div>
     
           <p class="mt-2 bg-info text-white p-2" > Reaction time: {{ score }} ms 
               <span class="badge badge-primary">{{rank}}</span>
           </p>

     
   </div>
</template>


<script>
export default {
    props: ['score'],
    data(){
        return{
            rank:null,
        }
    },
    mounted() {
        if (this.score < 300){
            this.rank = 'Super Fast'
        } else if (this.score <400){
            this.rank = 'Well Fast enough'
        } else {
            this.rank = 'not good at all..'
        }
    },
}
</script>