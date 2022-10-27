import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        const contactId = this.props.match.params.id
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        console.log('contact', contact);
        this.setState({ contact })
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/')
    }




    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>

        return (
            <section>
                <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
                <form onSubmit={this.onSaveContact}>
                    <label htmlFor="name">Name</label>
                    <input onChange={this.handleChange} type="text" name="name" id="name" value={contact.name} />

                    <label htmlFor="phone">Phone</label>
                    <input onChange={this.handleChange} type="text" name="phone" id="phone" value={contact.phone} />
                    <button>Save</button>
                </form>
            </section>
        )
    }
}
