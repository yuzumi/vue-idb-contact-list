<template>
  <mdb-card class="contact-list-item">
    <mdb-card-body>
      <div class="d-flex">
        <div class="flex-grow-1">
          <mdb-card-title>
            {{ contact.name }}
            <mdb-icon class="text-warning" icon="star" v-if="contact.isFavorite" />
          </mdb-card-title>
          <mdb-card-text>email: {{ contact.email }}</mdb-card-text>
          <mdb-card-text>phone: {{ contact.phone }}</mdb-card-text>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-between">
          <mdb-btn class="px-2 py-1 m-0" color="info" size="sm" @click.native="$emit('favorite')">
            <mdb-icon far icon="star" />
          </mdb-btn>
          <mdb-btn class="px-2 py-1 m-0" color="danger" size="sm" @click.native="$emit('remove')">
            <mdb-icon icon="trash-alt" />
          </mdb-btn>
        </div>
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
  }
}
</script>
