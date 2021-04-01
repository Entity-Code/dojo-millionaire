import Vue from 'vue';
import App from './App.vue';
import Contenitore from './components/Contenitore.vue';
import Domanda from './components/Domanda.vue';
import Risposte from './components/Risposte.vue';

Vue.component('contenitore', Contenitore);
Vue.component('domanda', Domanda);
Vue.component('risposte', Risposte);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
