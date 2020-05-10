import Vue from 'vue'
import * as mdbvue from 'mdbvue'

const registerAllComponentsGlobally = (Vue, mdbvue) => {
  for (const component in mdbvue) {
    Vue.component(component, mdbvue[component])
  }
}

registerAllComponentsGlobally(Vue, mdbvue)
