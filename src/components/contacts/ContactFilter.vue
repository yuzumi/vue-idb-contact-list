<template>
  <div class="navbar mb-3">
    <nav class="nav w-100">
      <router-link
        class="nav-link"
        active-class="disabled"
        exact-active-class=""
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
          to: { name: 'contacts', query: { filter: 'favorited' } },
          attrs: {
            exact: true
          }
        },
        {
          label: 'Trash',
          to: { name: 'contacts', query: { filter: 'deactivated' } },
          attrs: {
            exact: true,
            class: 'ml-auto'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.justify-self-end {
  justify-self: flex-end;
}
</style>
