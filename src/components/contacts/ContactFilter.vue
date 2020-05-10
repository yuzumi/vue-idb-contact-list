<template>
  <div class="navbar mb-3">
    <nav class="nav">
      <router-link
        class="nav-link"
        active-class="disabled"
        v-for="link of links"
        v-bind="link.attrs"
        :key="link.label"
        :to="link.to"
      >
        {{ link.label }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'ContactFilter',
  data () {
    return {
      links: [
        {
          label: 'All',
          to: { name: 'contacts' },
          attrs: {
            exact: true
          }
        },
        {
          label: 'Favorite',
          to: { name: 'contacts', query: { filter: 'favorite' } },
          attrs: {}
        }
      ]
    }
  }
}
</script>
