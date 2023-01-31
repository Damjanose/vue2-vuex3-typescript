<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'LoginView' }">Go to Login</router-link> |
      <router-link :to="{ name: 'RegisterView' }">Go to Register</router-link>
    </nav>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
input {
  width: 70%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 12px 20px;
}
input:focus-visible {
  outline: none;
}

a {
  text-decoration: none;
}
</style>
