<template>
  <div class="contacts">
    <contact-list :contacts="contacts" v-if="contacts.length" />
    <no-contact v-else />
  </div>
</template>

<script>
import { contacts } from '@/store'

import NoContact from '@/components/contacts/NoContact'
import ContactList from '@/components/contacts/ContactList'

export default {
  name: 'Contacts',
  computed: {
    ...contacts.mapGetters(['contacts'])
  },
  components: {
    NoContact,
    ContactList
  }
}
</script>
