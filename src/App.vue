<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact Us</router-link> |

    <!-- Another way to use router link by using name parameter instead of path. This is the better approach because in 
    future if path name will be change than we don't need to change path name from various places. Mostly path
    name will be change but name value will not be change in most of the cases.
    
    {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
    },
    
    -->

    <router-link :to="{name: 'Blogs'}">My Blogs</router-link> |
    <router-link :to="{name: 'Jobs'}">Jobs</router-link>


  </div>
  <button v-on:click="goBack">Go Back</button>
  <button v-on:click="homePageRedirect">Redirect to Home Page</button>
  <button @click="moveForward">Move Forward</button>
  <router-view/>

  <!-- Inside the router view our component will be loaded on click of particular link -->
</template>

<script>

export default{

  name: "App",
  methods: {

    //Programmatic Routing using History
    goBack(){
      this.$router.go(-1);
    },
    homePageRedirect(){
        this.$router.push({name: 'Home'});
    },
    moveForward(){
     this.$router.go(1);

    }
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button{
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  background: rgb(102, 170, 105);
  color: white;
  font-size: 1.1rem;
}
button:focus{
  outline: none;
}
button:hover{
  background: rgb(216, 121, 121);
}
</style>
