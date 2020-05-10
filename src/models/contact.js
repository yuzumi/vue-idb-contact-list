import constant from 'lodash/fp/constant'
import uniqueId from 'lodash/fp/uniqueId'

export const createContact = contact => ({
  id: uniqueId(),
  isActive: true,
  ...contact
})

export const getBlankContact = constant({
  name: '',
  email: '',
  phone: '',
  isActive: true,
  isFavorite: false
})
