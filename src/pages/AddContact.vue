<template>
  <div class="add-contact">
    <mdb-row>
      <mdb-col md="8" offsetMd="2">
        <add-contact-form @submit="handleSubmit" />
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { contacts } from '@/store'

import AddContactForm from '@/components/contacts/AddContactForm'

export default {
  name: 'AddContact',
  methods: {
    ...contacts.mapMutations(['addContact']),
    handleSubmit ({ contact }) {
      this.addContact({ contact })
      this.$router.push('/').catch(() => {})
    }
  },
  components: {
    AddContactForm
  }
}
</script>
