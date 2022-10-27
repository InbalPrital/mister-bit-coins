// import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

function _AppHeader(props) {
    return (
        <header>
            <div>Mister Bitcoin</div>
            <nav className='header-nav'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink exact to='/contacts'>Contacts</NavLink>
                <NavLink exact to='/statistics'>Statistics</NavLink>
                <NavLink exact to='/Signup'>Signup</NavLink>
            </nav>
        </header>
    )
}

export const AppHeader = withRouter(_AppHeader)

