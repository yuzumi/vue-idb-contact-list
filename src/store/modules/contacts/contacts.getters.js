export default {
  contacts: state =>
    state.contacts,

  contactById: state => id =>
    state.contacts.find(contact => contact.id === id),

  favoriteContacts: state =>
    state.contacts.filter(contact => contact.isFavorite)
}
