<template>
  <div class="edit-contact">
    <mdb-row>
      <mdb-col md="8" offsetMd="2">
        <edit-contact-form :contact="contact" @submit="handleSubmit" v-if="contact" />
        <contact-not-found v-else />
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { contacts } from '@/store'

import EditContactForm from '@/components/contacts/EditContactForm'
import ContactNotFound from '@/components/contacts/ContactNotFound'

export default {
  name: 'EditContact',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...contacts.mapGetters(['contactById']),
    contact () {
      return this.contactById(this.id)
    }
  },
  methods: {
    ...contacts.mapMutations(['editContact']),
    handleSubmit ({ newContact }) {
      this.editContact({ newContact })
      this.$router.push('/').catch(() => {})
    }
  },
  components: {
    EditContactForm,
    ContactNotFound
  }
}
</script>
