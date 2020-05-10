<template>
  <div>
    <navbar />
    <mdb-container class="mt-5">
      <slot />
    </mdb-container>
  </div>
</template>

<script>
import Navbar from '@/components/layouts/Navbar'

export default {
  name: 'Layout',
  components: {
    Navbar
  }
}
</script>
