import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import { defineCustomElements } from '@chavlji/stencil/loader';

// Inject into the window object
defineCustomElements(window);

Vue.config.productionTip = false

Vue.config.ignoredElements = [/zen-simple/];

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
