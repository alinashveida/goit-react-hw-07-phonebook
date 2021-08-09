import { Title, SubTitle, Container } from './App.styled'
import ContactForm from '../Form/ContactForm'
import ContactsListSection from '../ContactsList/ContactsList'
import Filter from '../Filter/Filter'

import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SubTitle>Contacts</SubTitle>

      <Filter />

      <ContactsListSection />

      <ToastContainer />
    </Container>
  )
}
