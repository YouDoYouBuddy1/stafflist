import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/page.vue'
import EditPerson from '../components/editPerson.vue'
import Person from '../components/person.vue'
//import json from '../people.json'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/staff/:id',
    name: 'page',
    component: Page,
    children: [
      {
        path: 'edit',
        component: EditPerson
      },
      {
        path: '',
        component: Person
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
