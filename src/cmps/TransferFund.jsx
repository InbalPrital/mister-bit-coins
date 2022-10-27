import { Component } from 'react'
import { userService } from '../services/userService.js'

export class TransferFund extends Component {

  state = {
    amount: '',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? (+target.value || '') : target.value
    this.setState({ amount: value })
  }

  onTransfer = (ev) => {
    ev.preventDefault()
    userService.addMove(this.props.contact, this.state.amount)
    // this.props.loadMoves()
    // 1. communicate with parent component, invoke loadMoves(contactId), should get 
    // loadMoves from parent components as props
    // 2. load only current contanct (contactId) moves
    // this.props.history.push('/')
  }


  render() {
    const { amount } = this.state
    return (
      <section className="transfer-container">
        <div>Transfer coins to {this.props.contact.name}:</div>
        <br />
        <div>Amount:
          <form onSubmit={this.onTransfer} className='tarnsferm-form'>
            <section>
              <label htmlFor="amount"></label>
              <input value={amount} onChange={this.handleChange} type="text" name="amount" id="amount" />
            </section>
            <button>Transfer</button>
          </form>
        </div>
      </section>
    )
  }
}
