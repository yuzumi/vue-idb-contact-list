<template>
  <div class="app" id="app">
    <layout>
      <router-view />
    </layout>
  </div>
</template>

<script>
import Layout from '@/components/layouts/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
