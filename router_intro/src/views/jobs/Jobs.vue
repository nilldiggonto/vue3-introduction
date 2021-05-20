<template>

<div>
    <div v-for="job in jobs" :key="job.id">

        <router-link :to="{name: 'JobDetails' , params: {id: job.id} }">

        <h2>{{job.title}}</h2>

        </router-link>
    </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            jobs: [
                {title:'one',id:1,details:'something'},
                {title:'two',id:2,details:'something'},
                {title:'three',id:3,details:'something'}

            ]
        }
    }
}
</script>