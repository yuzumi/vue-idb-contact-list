import createPersistedState from 'vuex-persistedstate'
import config from '@/config'

export default createPersistedState({
  key: config.vuexStorageKey
})
