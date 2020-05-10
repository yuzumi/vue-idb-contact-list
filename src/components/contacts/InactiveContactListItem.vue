<template>
  <mdb-card class="inactive-contact-list-item">
    <mdb-card-body>
      <mdb-card-title>
        {{ contact.name }}
        <mdb-icon class="text-warning" icon="star" v-if="contact.isFavorite" />
      </mdb-card-title>
      <mdb-card-text>email: {{ contact.email }}</mdb-card-text>
      <mdb-card-text>phone: {{ contact.phone }}</mdb-card-text>
      <div class="d-flex align-items-center">
        <mdb-btn class="btn-action px-2 py-1" color="secondary" size="sm" @click.native="$emit('activate', contact)">
          <mdb-icon icon="eye-slash" />
        </mdb-btn>
        <mdb-btn class="btn-action px-2 py-1" color="danger" size="sm" @click.native="$emit('remove', contact)">
          <mdb-icon icon="trash-alt" />
        </mdb-btn>
      </div>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
export default {
  name: 'InactiveContactListItem',
  props: {
    contact: {
      type: Object,
      required: true
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
