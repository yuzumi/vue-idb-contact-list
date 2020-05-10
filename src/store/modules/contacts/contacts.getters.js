export default {
  contacts: state =>
    state.contacts,

  contactById: state => id =>
    state.contacts.find(contact => contact.id === id),

  activeContacts: state =>
    state.contacts.filter(contact => contact.isActive),

  inactiveContacts: state =>
    state.contacts.filter(contact => !contact.isActive),

  numberOfInactiveContacts: (_state, { inactiveContacts }) =>
    inactiveContacts.length,

  favoriteContacts: (_state, { activeContacts }) =>
    activeContacts.filter(contact => contact.isFavorite)
}
