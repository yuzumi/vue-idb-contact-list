<template>
  <mdb-navbar expand="large" color="default" dark>
    <mdb-navbar-brand class="font-weight-bolder" to="/">CL</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item to="/add">
          <mdb-icon icon="plus" />
        </mdb-nav-item>
        <mdb-nav-item to="/trash">
          <mdb-icon icon="trash-alt" />
          <span class="ml-1 font-weight-bold">{{ numberOfInactiveContacts }}</span>
        </mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import { contacts } from '@/store'

export default {
  name: 'Navbar',
  computed: {
    ...contacts.mapGetters(['numberOfInactiveContacts'])
  }
}
</script>
