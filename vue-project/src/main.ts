import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import router from './router';
import { createPinia } from 'pinia';

library.add(faFacebook, faTwitter, faInstagram);

const app = createApp(App);

app.use(router)

app.use(createPinia())

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');

