import { Component } from 'react'
import { userService } from '../services/userService'

export class MovesList extends Component {


  componentDidMount() {
    const { moves } = this.props
    console.log('move list moves', moves);
    // const movesList = userService.getMovesList()
  }

  // updateMoves() {
  //   const movesList = userService.getMovesList()
  // }


  render() {
    const moves = this.props.moves
    if (!moves) return <div>Loading...</div>
    return (
      <section className="moves-list-container">
        <div>Your Moves</div>
        {moves.map(move => <p>{move.amount}</p>)}

      </section>
    )
  }
}
