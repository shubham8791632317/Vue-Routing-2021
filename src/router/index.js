import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blogs from '../views/Blogs.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // This is used for Lazy Loading Purpose
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },

  //Send Paramter like id in Routing
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  },

  // Redirect User on Particular page suppose user is trying to access our website through previous url but now our
  // website url has been changed so we need to redirect user to our website by redirecting it to the new url

  //redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },

  // Now If anone will try to access all-jobs than it will be redirected to jobs url

  //Page Not Found Redirection
  {
    path: '/:catchAll(.*)', //This is a regex pattern
    name: 'PageNotFound',
    component: PageNotFound
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
