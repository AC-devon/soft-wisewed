import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: {
    currentUser:null
  },
  getters: {
    currentUser: state => state.currentUser
  },
  mutations: {
    userStatus (state, user) {
      if(user){
        state.currentUser = user;
      } else{
        state.currentUser = null
      }
    }
  },
  actions: {
    setUser(context,user){
      context.commit('userStatus', user) 
    }
  }
})
