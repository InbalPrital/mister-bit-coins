import { Component } from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {
    return (
        <section className='preview-container'>
            <Link to={`/contact/${contact._id}`}>
                <img className='profile-img' src={`https://robohash.org/${contact._id}`} alt="" />
                <h4 className='contact-name-preview'>{contact.name}</h4>
            </Link>
            <section className='actions'>
                <button className="remove-btn" onClick={() => onRemoveContact(contact._id)}>🗑️</button>
                <Link className='edit-btn' to={`/contact/edit/${contact._id}`}>✏️</Link>
            </section>
        </section>
    )
}
