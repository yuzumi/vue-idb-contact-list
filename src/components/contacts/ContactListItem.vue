<template>
  <mdb-card class="contact-list-item">
    <mdb-card-body>
      <mdb-card-title>{{ contact.name }}</mdb-card-title>
      <mdb-card-text>email: {{ contact.email }}</mdb-card-text>
      <mdb-card-text>phone: {{ contact.phone }}</mdb-card-text>
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
  }
}
</script>
