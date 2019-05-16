<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
:root {
  --default-background: #2af76e;
  --default-color: #434343;
}

html {
  box-sizing: border-box;
}

* {
  margin: 0;
  box-sizing: inherit;
}

*:before, *:after {
  box-sizing: inherit;
}

body {
  background: var(--default-background);
  color: var(--default-color);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #0000ff;

    &.router-link-exact-active {
      color: #3333cc;
    }
  }
}
</style>
