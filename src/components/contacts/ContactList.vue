<template>
  <section class="contact-list">
    <mdb-row v-for="contact of contacts" :key="contact.id">
      <mdb-col>
        <contact-list-item :contact="contact" />
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import ContactListItem from '@/components/contacts/ContactListItem'

export default {
  name: 'ContactList',
  props: {
    contacts: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ContactListItem
  }
}
</script>
