<template>
  <div class="page">
    <section class="staff">
      <h2>Staff</h2>
      <staffList/>
    </section>
    <section class="details">
      <h2>Details</h2>
        <router-view/>
    </section>
  </div>
</template>

<script>
//import person from "@/components/person.vue"
import staffList from "@/components/staffList.vue"
import json from "@/people.json"

export default {
  data: function(){return{
    people: json.people
  }},
  components: {
    //person,
    staffList
  }
}
</script>

<style scoped>
.page {
  display: grid;
  grid-template-areas: "staff details";

  max-width: 40rem;
  min-width: 5rem;
  max-height: 120rem;
  min-height: 40rem;
  background-color: grey;

  margin: 0 auto;
}

.staff {
  background-color: lightgrey;
}
.details {
  background-color: whitesmoke;
}

</style>
