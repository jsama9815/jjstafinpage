import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTiktok, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';


const app = createApp(App)

library.add(faHome, faTiktok, faInstagram, faWhatsapp,faLinkedin);

app.component('VueperSlides', VueperSlides);
app.component('VueperSlide', VueperSlide);

app.component('font-awesome-icon', FontAwesomeIcon);

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)
app.use(router)

app.mount('#app')
