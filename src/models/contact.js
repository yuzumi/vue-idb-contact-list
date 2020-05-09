import constant from 'lodash/fp/constant'
import uniqueId from 'lodash/fp/uniqueId'

export const createContact = contact => ({
  id: uniqueId(),
  ...contact
})

export const getBlankContact = constant({
  name: '',
  email: '',
  phone: '',
  isFavorite: false
})
