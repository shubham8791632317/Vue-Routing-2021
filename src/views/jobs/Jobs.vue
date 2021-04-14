<template>
  <div>
      <h1>Jobs Home Page</h1>
      <table>
          <tr>
              <td>S.No.</td>
              <td>Job Id</td>
              <td>Job Title</td>
              <td>Salary</td>
          </tr>
          <tr v-for="(job,index) in jobs" :key="job.jobId">
              <td>{{index+1}}</td>
              <td>{{job.jobId}}</td>
              <router-link :to="{name: 'JobDetails', params: { id: job.jobId }}">
              <td>{{job.jobTitle}}</td>
              </router-link>
              <td>{{job.salary}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name: 'Jobs',
    data(){
        return{
            jobs: [
                {  jobId: 'A1', jobTitle: 'Front-end Developer', salary: 50000 },
                {  jobId: 'A2', jobTitle: 'Back-end Developer', salary: 60000 },
                {  jobId: 'A3', jobTitle: 'full-stack Developer', salary: 100000 },
            ]
        }
    }
}
</script>

<style>

</style>