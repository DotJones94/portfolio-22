import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import './assets/style.css'
import Particles from "vue3-particles";
import VueKinesis from "vue-kinesis";
import VuePrlx from 'vue-prlx';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Particles);
app.use(VueKinesis);

app.use(VuePrlx);

app.mount('#app')


