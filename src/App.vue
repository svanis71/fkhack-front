<template>
  <div id="app">
    <header>
      <div id="logo-wrapper">
        <div id="logo"></div>
      </div>
      <nav>
        <router-link to="/">
          <img src="./assets/avatar.svg">Logga in
        </router-link>
        <router-link to="/Statistik">
          <img src="./assets/graph.svg">Statistik
        </router-link>
        <router-link to="/Powerpoint">
          <img src="./assets/hamburgare.svg">
          Powerpoint
        </router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
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
  background: #DCE7F1;
  color: var(--default-color);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  border-bottom: solid 2px #A6D0AB;
  box-shadow: 0px -2px 0px 0px #0c7340, -2px 0px 0px 0px #0c7340, 2px 0px 0px 0px #0c7340, 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
  background: #116A3E;

  #logo-wrapper {
    padding: 17px 0 7px 1rem;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
    position: relative;
  }

  #logo {
    display: inline-block;
    width: 206px;
    height: 27px;
    background: url('./assets/fk_logo.svg') no-repeat;
    background-size: 100%;
    background-position-y: 50%;
  }
}

button {
  background-color: #4a52b6;
  border-color: #007095;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 4px;
  font-size: 1em;
  font-weight: 700;
  min-width: 196px;
  padding: 1.25em;
}

select {
  appearance: none;
  background-color: #f5f6fa;
  background-image: url('./assets/hake-ned-bla.svg');
  background-position: 95% 50%;
  background-position: right 12px center;
  background-repeat: no-repeat;
  border: 0;
  border-radius: 2px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.3);
  font-size: 0.875rem;
  height: 37px;
  margin-bottom: 1.5em;
  padding: 7px 32px 7px 0.5rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

nav {
  background-color: #00311B;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1px;

  img {
    padding-right: 5px;
  }

  a {
    padding: 14px;
    background-color: #0D462B;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #0E5532;
    }
  }
}

main {
  margin: 1rem auto;
  width: 90vw;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  background-color: #fff;
}
</style>
