<template>
    <div class="block p-4 bg-danger text-center mt-2"  v-if="showBlock" @click="stopTimer">
        Click ME (I AM A BOX)
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0 
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },
    methods: {
        startTimer(){
            this.timer = setInterval( () => {
                this.reactionTime += 10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
            // console.log(this.reactionTime)
            this.$emit('end',this.reactionTime)
        }
    },
    updated() {
        
    },
    unmounted() {
        
    },
    
}
</script>

<style>
    .block{
        max-width:20% ;
        margin: auto;
    }
</style>