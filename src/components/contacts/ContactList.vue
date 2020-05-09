<template>
  <section class="contact-list">
    <mdb-row v-for="contact of contacts" :key="contact.id">
      <mdb-col>
        <contact-list-item
          :contact="contact"
          @remove="$emit('remove', { id: contact.id })"
          @favorite="$emit('favorite', { id: contact.id })"
        />
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
