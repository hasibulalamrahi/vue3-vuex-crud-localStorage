<template>
  <div id="nav">
    <router-link to="/">Posts</router-link> |
    <router-link to="/categories">categories</router-link>
  </div>
  <router-view/>
</template>

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
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;

   
}

#nav a.router-link-exact-active {
  color:white;
  background:crimson;

}
</style>
