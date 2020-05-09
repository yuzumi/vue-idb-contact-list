<template>
  <div class="edit-contact">
    Edit contact {{ id }}
  </div>
</template>

<script>
export default {
  name: 'EditContact',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
