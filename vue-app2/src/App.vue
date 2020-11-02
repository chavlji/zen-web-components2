<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-row>
      <b-col>
        <zen-simple name="Božidar" :value="stencilValue" />
      </b-col>
      <b-col>
        <zen-simple-non-shadow name="AAAAAA" :value="stencilValue" />
      </b-col>
      <b-col>
        <zen-dropdown-simple name="AAAAAA" :value="stencilValue" />
      </b-col>
    </b-row>
    <p>Native p element</p>
    <input type="text">
      <button @click="stencilValue = 'form vue button'">set stencil value</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import { BRow, BCol } from 'bootstrap-vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BRow,
    BCol,
  },
  data: () => ({
    stencilValue: 'vue default',
  }),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  background-color: #ffdead;
}
</style>
