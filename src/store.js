import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const  store = new Vuex.Store({
    state: {
      firstName:'',
      lastName:'',
      telNumber:'',
      phoneNumber:'',
      address:'',
      mapMarker: { position: { lat: 35.70677364044172, lng: 51.44044578075409 } },
      mapCenter: { lat: 35.70677364044172, lng: 51.44044578075409 },
    }
  });
