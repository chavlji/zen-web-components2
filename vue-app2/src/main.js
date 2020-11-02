import Vue from 'vue'

import { defineCustomElements } from '@chavlji/stencil/loader';
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Inject into the window object
defineCustomElements(window);

Vue.config.productionTip = false

Vue.config.ignoredElements = ['zen-simple', 'zen-simple-non-shadow', 'zen-dropdown-simple'];

new Vue({
  render: h => h(App),
}).$mount('#app')
