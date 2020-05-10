<template>
  <mdb-card class="contact-list-item">
    <mdb-card-body>
      <mdb-card-title>
        {{ contact.name }}
        <mdb-icon class="text-warning" icon="star" v-if="contact.isFavorite" />
      </mdb-card-title>
      <mdb-card-text>email: {{ contact.email }}</mdb-card-text>
      <mdb-card-text>phone: {{ contact.phone }}</mdb-card-text>
      <div class="d-flex align-items-center">
        <mdb-btn class="btn-action px-2 py-1 ml-0" color="info" size="sm" @click.native="$emit('favorite')">
          <mdb-icon far icon="star" />
        </mdb-btn>
        <mdb-btn class="btn-action px-2 py-1" color="success" size="sm" @click.native="handleEdit">
          <mdb-icon icon="edit" />
        </mdb-btn>
        <mdb-btn class="btn-action px-2 py-1" color="warning" size="sm" @click.native="$emit('deactivate')">
          <mdb-icon icon="eye-slash" />
        </mdb-btn>
        <mdb-btn class="btn-action px-2 py-1" color="danger" size="sm" @click.native="$emit('remove')">
          <mdb-icon icon="times" />
        </mdb-btn>
      </div>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
export default {
  name: 'ContactListItem',
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleEdit () {
      this.$router
        .push({ name: 'edit-contact', params: { id: this.contact.id } })
        .catch(() => {})
    }
  }
}
</script>

<style>
.btn-action {
  height: 24px;
  min-width: 36px;
}
</style>
