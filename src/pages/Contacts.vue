<template>
  <div class="contacts">
    <contact-filter />

    <contact-list
      :contacts="contacts"
      @deactivate="deactivateContact"
      @favorite="favoriteContact"
      @remove="removeContact"
      v-if="hasContacts"
    />
    <no-contact v-else />
  </div>
</template>

<script>
import { contacts } from '@/store'

import NoContact from '@/components/contacts/NoContact'
import ContactList from '@/components/contacts/ContactList'
import ContactFilter from '@/components/contacts/ContactFilter'

export default {
  name: 'Contacts',
  props: {
    filter: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...contacts.mapGetters(['activeContacts', 'favoriteContacts']),
    contacts () {
      switch (this.filter) {
        case 'favorite':
          return this.favoriteContacts
        default:
          return this.activeContacts
      }
    },
    hasContacts () {
      return this.contacts.length > 0
    }
  },
  methods: {
    ...contacts.mapMutations([
      'favoriteContact',
      'deactivateContact',
      'removeContact'
    ])
  },
  components: {
    NoContact,
    ContactList,
    ContactFilter
  }
}
</script>
