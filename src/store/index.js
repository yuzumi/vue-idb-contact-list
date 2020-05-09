import Vue from 'vue'
import Vuex, { createNamespacedHelpers } from 'vuex'

import modules from '@/store/modules'
import plugins from '@/store/plugins'

Vue.use(Vuex)

export const contacts = createNamespacedHelpers('contacts')

export default new Vuex.Store({
  modules,
  plugins
})
