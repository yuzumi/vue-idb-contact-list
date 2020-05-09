<template>
  <div class="contacts">
    <div class="navbar mb-3">
      <nav class="nav">
        <router-link class="nav-link" :to="{ name: 'contacts' }" exact active-class="disabled">All</router-link>
        <router-link
          class="nav-link"
          :to="{ name: 'favorite-contacts' }"
          exact
          active-class="disabled"
        >Favorite</router-link>
      </nav>
    </div>

    <contact-list
      :contacts="favoriteContacts"
      @favorite="favoriteContact"
      @remove="removeContact"
      v-if="favoriteContacts.length"
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
    ...contacts.mapGetters(['favoriteContacts'])
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
