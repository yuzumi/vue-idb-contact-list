<template>
  <div class="contacts">
    <contact-filter />

    <contact-list
      :contacts="contacts"
      v-if="hasContacts"
      v-slot:list-item="{ contact, remove, favorite, activate, deactivate }"
    >
      <component
        :is="contactListItemComponent"
        :contact="contact"
        @remove="remove"
        @favorite="favorite"
        @activate="activate"
        @deactivate="deactivate"
      />
    </contact-list>

    <no-contact v-else />
  </div>
</template>

<script>
import { contacts } from '@/store'

import NoContact from '@/components/contacts/NoContact'
import ContactList from '@/components/contacts/ContactList'
import ContactFilter from '@/components/contacts/ContactFilter'
import ContactListItem from '@/components/contacts/ContactListItem'
import InactiveContactListItem from '@/components/contacts/InactiveContactListItem'

export default {
  name: 'Contacts',
  props: {
    filter: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...contacts.mapGetters(['activeContacts', 'favoriteContacts', 'inactiveContacts']),
    contacts () {
      switch (this.filter) {
        case '':
        case 'activated':
          return this.activeContacts
        case 'favorited':
          return this.favoriteContacts
        case 'deactivated':
          return this.inactiveContacts
        default:
          return []
      }
    },
    hasContacts () {
      return this.contacts.length > 0
    },
    contactListItemComponent () {
      switch (this.filter) {
        case 'deactivated':
          return 'InactiveContactListItem'
        default:
          return 'ContactListItem'
      }
    }
  },
  components: {
    NoContact,
    ContactList,
    ContactFilter,
    ContactListItem,
    InactiveContactListItem
  }
}
</script>
