import { storageService } from './storageService'

export const userService = {
   getUser,
   signup,
   addMove,
   getMovesList,
   getMovesByContact
}

const STORAGE_KEY= "loggedInUser"

const MOVES_KEY = 'moves'
const movesList= storageService.load(MOVES_KEY) || []

function signup(newUser) {
    const user={
        name: newUser,
        coins: 100,
        moves:[]
    }
    storageService.store(STORAGE_KEY, user)
    // return user
    // storageService.store(STORAGE_KEY, newUser)
}


function getUser () {
return storageService.load(STORAGE_KEY)
    }

    function addMove(contact, coinsAmount){
        const user = getUser()
        const move = {
            _id: _makeId(10),
            toId:contact._id,
            to: contact.name,
            from:user.name,
            at: new Date(),
            amount: +coinsAmount
        }
        console.log('move', move);
        user.coins -= coinsAmount
        user.moves.unshift(move)
        storageService.store(STORAGE_KEY, user)
        // movesList.push(move)
        // console.log('movesList', movesList);
        console.log('user',user);
        return move
    }

    function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getMovesList(){
    const user = getUser()
    console.log('getmoves', user.moves);
    return user.moves
}

function getMovesByContact(contactId){
    const user = getUser()
    console.log('movesContact',user.moves,contactId);
    return user.moves.filter(move => move.toId === contactId)
}





