<template>
  <form class="add-contact-form" @submit.prevent="handleSubmit">
    <p class="h4 text-center text-default mb-4">New contact</p>
    <mdb-input label="name" type="text" v-model="contact.name" />
    <mdb-input label="email" type="email" v-model="contact.email" />
    <mdb-input label="phone" type="tel" v-model="contact.phone" />
    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="is-favorite"
          v-model="contact.isFavorite"
        />
        <label class="custom-control-label" for="is-favorite">is favorite</label>
      </div>
    </div>
    <div class="d-flex">
      <mdb-btn class="ml-0 mr-auto" color="default" size="sm" type="submit">Add</mdb-btn>
      <mdb-btn color="warning" size="sm" type="reset" @click="handleReset">Reset</mdb-btn>
      <mdb-btn class="mr-0" color="danger" size="sm" @click="handleCancel">Cancel</mdb-btn>
    </div>
  </form>
</template>

<script>
import { createContact, getBlankContact } from '@/models/contact'

export default {
  name: 'AddContactForm',
  data () {
    return {
      contact: getBlankContact()
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('submit', { contact: createContact(this.contact) })
    },
    handleReset () {
      this.contact = getBlankContact()
    },
    handleCancel () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>
