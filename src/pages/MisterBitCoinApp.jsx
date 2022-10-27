import { Component } from 'react'
import { contactService } from '../services/contactService'
import { ContactDetails } from '../pages/ContactDetails'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import { Link } from 'react-router-dom'

export class MisterBitCoinApp extends Component {

  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null
  }

  componentDidMount() {
    this.loadContacts()
  }

  async loadContacts() {
    try {
      const contacts = await contactService.getContacts(this.state.filterBy)
      this.setState({ contacts })
    } catch (err) {
      console.log('err', err)
    }
  }

  onRemoveContact = async (contactId) => {
    await contactService.deleteContact(contactId)
    this.loadContacts()
  }


  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
    console.log('filterby', filterBy);
  }


  render() {
    const { contacts, selectedContactId } = this.state
    if (!contacts) return <div>loading...</div>
    return (
      <section className="contact-page-container">
        {selectedContactId ?
          <ContactDetails contactId={selectedContactId} /> :
          <>
            <ContactFilter onChangeFilter={this.onChangeFilter} />
            <Link className='add-btn' to="/contact/edit">Add Contact</Link>
            <ContactList contacts={contacts} history={this.props.history} onRemoveContact={this.onRemoveContact} />
          </>
        }
      </section>
    )
  }
}
