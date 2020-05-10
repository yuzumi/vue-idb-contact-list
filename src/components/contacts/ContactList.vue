<template>
  <section class="contact-list">
    <mdb-row class="mb-3" v-for="contact of contacts" :key="contact.id">
      <mdb-col>
        <slot name="list-item" v-bind="{ contact, remove, favorite, activate, deactivate }" />
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { contacts } from '@/store'

export default {
  name: 'ContactList',
  props: {
    contacts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...contacts.mapMutations([
      'removeContact',
      'favoriteContact',
      'activateContact',
      'deactivateContact'
    ]),
    remove (contact) {
      this.removeContact({ id: contact.id })
    },
    favorite (contact) {
      this.favoriteContact({ id: contact.id })
    },
    activate (contact) {
      this.activateContact({ id: contact.id })
    },
    deactivate (contact) {
      this.deactivateContact({ id: contact.id })
    }
  }
}
</script>
