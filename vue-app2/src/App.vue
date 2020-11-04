<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-row>
      <b-col>
        <zen-simple name="Božidar" />
      </b-col>
      <b-col>
        <zen-simple-non-shadow name="AAAAAA" :value="'x'" />
      </b-col>
      <b-col>
        <p>vue: {{ value }}</p>
        <zen-dropdown-simple :val.prop="value" :options.prop="options" @input2="input" />
      </b-col>
    </b-row>
    <p>Native p element</p>
    <input type="text">
      <button @click="value = {label: 'Bum'}">set stencil value</button>
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
    value: { label: 'Canadax' },
    jan: {a: 'jan'},
    options: [
      {label: 'Canadax'},
      {label: 'Bum'},
      {label: 'Luxembourg'}
    ]
  }),
  mounted() {
    /* setTimeout(() => {
      this.options = [
        {label: 'Canadaxx2'},
        {label: 'Luxembourgxx2'}
      ];
      console.log('set!');
    }, 2000); */
  },
  methods: {
    input(event) {
      console.log('input', event.detail.label);
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
  margin-top: 60px;
}

p {
  background-color: #ffdead;
}
</style>
