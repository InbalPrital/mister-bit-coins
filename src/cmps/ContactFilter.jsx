import { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        name: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }


    render() {
        const { name } = this.state
        return (
            <form className='contact-filter'>
                <section>
                    {/* <label htmlFor="name">Search contact </label> */}
                    <input className='search-filter' placeholder='Search contact' value={name} onChange={this.handleChange} type="text" name="name" id="name" />
                </section>
            </form>
        )
    }
}
