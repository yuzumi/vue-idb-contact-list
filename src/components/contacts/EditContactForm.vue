<template>
  <form class="edit-contact-form" @submit.prevent="handleSubmit">
    <p class="h4 text-center text-default mb-4">Edit contact</p>
    <mdb-input label="name" type="text" v-model="model.name" />
    <mdb-input label="email" type="email" v-model="model.email" />
    <mdb-input label="phone" type="tel" v-model="model.phone" />
    <div class="form-group">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="is-favorite"
          v-model="model.isFavorite"
        />
        <label class="custom-control-label" for="is-favorite">is favorite</label>
      </div>
    </div>
    <div class="d-flex">
      <mdb-btn
        class="ml-0 mr-auto"
        color="default"
        size="sm"
        :disabled="contactNotChanged"
        type="submit"
      >Edit</mdb-btn>
      <mdb-btn
        color="warning"
        size="sm"
        type="reset"
        :disabled="contactNotChanged"
        @click="handleReset"
      >Reset</mdb-btn>
      <mdb-btn class="mr-0" color="danger" size="sm" @click="handleCancel">Cancel</mdb-btn>
    </div>
  </form>
</template>

<script>
import isEqual from 'lodash/fp/isEqual'

export default {
  name: 'EditContactForm',
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      model: { ...this.contact }
    }
  },
  computed: {
    contactNotChanged () {
      return isEqual(this.model, this.contact)
    }
  },
  methods: {
    handleSubmit () {
      this.$emit('submit', { newContact: this.model })
    },
    handleReset () {
      this.model = { ...this.contact }
    },
    handleCancel () {
      this.$router.push('/').catch(() => {})
    }
  }
}
</script>
