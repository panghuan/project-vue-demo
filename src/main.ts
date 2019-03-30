import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

import { Header, Swipe, SwipeItem } from 'mint-ui';
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
