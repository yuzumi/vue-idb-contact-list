import prop from 'lodash/fp/prop'

export default [
  {
    path: '/',
    name: 'contacts',
    props: prop('query'),
    component: () => import('@/pages/Contacts.vue')
  },
  {
    path: '/add',
    name: 'add-contact',
    component: () => import('@/pages/AddContact.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit-contact',
    props: true,
    component: () => import('@/pages/EditContact.vue')
  }
]
