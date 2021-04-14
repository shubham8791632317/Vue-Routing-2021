<template>
  <div>
      <h2>This is Job Details Page</h2>
        <!-- $route gives the details of current route -->
      <h3>The Job Id is: {{ $route.params.id}}</h3> <!-- 1st Way -->
      <h3>The Job Id is: {{ id}}</h3> <!-- 2nd Way using from data() -->

      <!-- Above, $route.params.id (id) is same as the parameter name which we used in routes array like /:id

        {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails
        }
      -->

      </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>