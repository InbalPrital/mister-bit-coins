import { Component } from 'react'
// import { StorageService } from "./services/StorageService"
import { userService } from "../services/userService"

export class Signup extends Component {


 state = {
        userName: '',
    }

    handleChange = ({ target }) => {
        console.log('target', target);
        const field = target.name
        const value = target.value
        this.setState({ userName: value })
    }

      onSaveUser = (ev) => {
        ev.preventDefault()
        console.log('hi');
        console.log(this.state.userName);
        userService.signup(this.state.userName)
        this.props.history.push('/')
    }
    
    
    render() {
        const { userName } = this.state
        return (
            <section>
            <div>Please enter your name:</div>
            <form onSubmit={this.onSaveUser}className='signup'>
                <section>
                    <label htmlFor="userName"></label>
                    <input value={userName} onChange={this.handleChange} type="text" name="userName" id="userName" />
                </section>
            </form>
            </section>
        )
    }
}
