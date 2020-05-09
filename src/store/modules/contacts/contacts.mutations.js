export default {
  addContact: (state, { contact }) =>
    (state.contacts = state.contacts.concat(contact)),

  editContact: (state, { newContact }) =>
    (state.contacts = state.contacts.map(contact => (
      contact.id === newContact.id
        ? { ...contact, ...newContact }
        : contact
    ))),

  favoriteContact: (state, { id }) =>
    (state.contacts = state.contacts.map(contact => (
      contact.id === id
        ? { ...contact, isFavorite: !contact.isFavorite }
        : contact
    ))),

  removeContact: (state, { id }) =>
    (state.contacts = state.contacts.filter(contact => contact.id !== id))
}
