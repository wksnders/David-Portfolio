
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import useLocalization from './composables/useLocalization'

const { preloadLanguages } = useLocalization();

const app = createApp(App);

app.use(router);

preloadLanguages();

app.mount('#app');
