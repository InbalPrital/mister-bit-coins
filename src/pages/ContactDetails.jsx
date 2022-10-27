import { Component } from 'react'
import { contactService } from '../services/contactService'
import { TransferFund } from '../cmps/TransferFund'
import { MovesList } from '../cmps/MovesList'
import { userService } from '../services/userService'
import { storageService } from '../services/storageService'

export class ContactDetails extends Component {

  // const MOVES_KEY = 'moves'

  state = {
    contact: null,
    moves: null

  }


  // loadMoves = (contactId) => {
  //   console.log('loadMoves() contactId', contactId);
  //   const movesList = storageService.load('moves')
  //   return movesList
  // }

  async componentDidMount() {
    const contactId = this.props.match.params.id
    const contact = await contactService.getContactById(contactId)
    const moves = userService.getMovesByContact(contactId)
    console.log('moves', moves);
    this.setState({ contact })
    this.setState({ moves })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
  }

  async loadContact() {
    const contactId = this.props.match.params.id
    const contact = await contactService.getContactById(contactId)
    this.setState({ contact })
  }

  onAddMove = async (contact, amount) => {
    await this.props.addMove(contact, amount)
  }

  onBack = () => {
    this.props.history.push('./')
  }

  render() {
    const { contact, moves } = this.state

    if (!contact) return <div>Loading...</div>
    return (
      <section>
        <div>ContactDetails</div>
        <h4>{contact.name}</h4>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
        <img className="profile-img-details" src={`https://robohash.org/${contact._id}`} alt="" />
        <TransferFund loadMoves={this.loadMoves} contact={contact} />
        <MovesList moves={moves} />
        <button onClick={this.onBack}> Back </button>
      </section>
    )
  }
}
