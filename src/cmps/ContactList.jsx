import { Component } from 'react'
import { ContactPreview } from './ContactPreview'


export function ContactList({ contacts, history, onRemoveContact }) {
  return (
    <section className="list-container">
      {contacts.map(contact => <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} />)}
    </section>
  )
}
