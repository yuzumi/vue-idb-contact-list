<template>
  <div class="contacts">
    <contact-list
      :contacts="contacts"
      @favorite="favoriteContact"
      @remove="removeContact"
      v-if="contacts.length"
    />
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
  methods: {
    ...contacts.mapMutations(['favoriteContact', 'removeContact'])
  },
  components: {
    NoContact,
    ContactList
  }
}
</script>
