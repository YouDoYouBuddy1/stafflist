<template>
    <div>
        <h3>Edit {{name}}</h3>
        <p>{{position}}</p>

        <section class = "contact">
            <p>Phone: {{phoneNr}}</p>
            <p>Email: {{email}}</p>
        </section>
    </div>
</template>

<script>
export default {
    data: function(){return{

    }},
    props: {
        name: String,
        position: String,
        phoneNr: String,
        email: String

    }
}
</script>