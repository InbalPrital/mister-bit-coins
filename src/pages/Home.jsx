import { Component } from 'react'
import { userService } from '../services/userService.js'
import BitcoinService from '../services/BitcoinService.js'

export class Home extends Component {

  state = {
    user: null,
    rate: null
  }

  componentDidMount() {
    const loggenInUser = userService.getUser()
    this.setState({ user: loggenInUser })
    this.getRate()
  }

  async getRate() {
    const rate = await BitcoinService.getRate()
    console.log('rate', rate);
    this.setState({ rate })
  }


  render() {
    const user = userService.getUser()
    const { rate } = this.state
    return (
      <section className='home-container'>
        <div>Hello {user?.name}!</div>
        <div>🪙 Coins: {user?.coins}</div>
        <div>rate: {rate}</div>
      </section>
    )
  }
}
