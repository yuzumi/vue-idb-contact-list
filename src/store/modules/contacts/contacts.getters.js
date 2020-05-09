export default {
  contacts: state =>
    state.contacts,

  favoriteContacts: state =>
    state.contacts.filter(contact => contact.isFavorite)
}
