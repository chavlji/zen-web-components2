<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>Col 1</b-col>
        <b-col>Col 2</b-col>
        <b-col>Col 3</b-col>
      </b-row>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Web components tester" />
      <zen-simple name="Božidar" />
    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import { BContainer, BRow, BCol } from 'bootstrap-vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    BContainer,
    BRow,
    BCol,
  },
};
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
  background-color: #0f0;
}
</style>
