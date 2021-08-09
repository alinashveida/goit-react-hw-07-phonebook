import { ContactsList, ContactItem, DeleteButton } from './ContactsList.styled'
import { AiOutlineUser } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

import { connect, useSelector, useDispatch } from 'react-redux'
import action from '../../redux/action'
import { getFilterContacts } from '../../redux/selector'

export default function ContactsListSection() {
  const contacts = useSelector(getFilterContacts)

  const dispatch = useDispatch()

  const onDelete = (id) => dispatch(action.deleteContact(id))

  return (
    <ContactsList>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <AiOutlineUser /> {contact.name}: {contact.number}
          <DeleteButton type="button" onClick={() => onDelete(contact.id)}>
            <FiX></FiX>
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  )
}

// const getFilterContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase()

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   )
// }

// const mapStateToProps = (state) => ({
//   contacts: getFilterContacts(state.contacts.items, state.contacts.filter),
// })

// const mapDispathToProps = (dispatch) => ({
//   onDeleteContact: (id) => dispatch(action.deleteContact(id)),
// })
// export default connect(mapStateToProps, mapDispathToProps)(ContactsListSection)
