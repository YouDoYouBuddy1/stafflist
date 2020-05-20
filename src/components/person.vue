<template>
    <div>
        <h3>{{name}}</h3>
        <p>{{position}}</p>

        <section class = "contact">
            <p>Phone: {{phoneNr}}</p>
            <p>Email: {{email}}</p>
            <p v-on:click = "test">click me</p>
        </section>
        <router-view/>
    </div> 
</template>

<script>
export default {
    data: function(){return{
        
    }},
    methods: {
        test(){
            console.log(this.$route.params.id)
        }
    },
    props: {
        name: String,
        position: String,
        phoneNr: String,
        email: String

    }
}
</script>