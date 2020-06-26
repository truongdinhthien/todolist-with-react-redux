import { v4 as uuidv4 } from 'uuid'

const intiState = [
    {
        id : uuidv4(),
        content: 'Learn Nodejs',
        completed: true
    },
    {
        id : uuidv4(),
        content : 'Toeic 700',
        completed : false
    }
]

const reducer = (state = intiState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return [...state, action.payload]
        }

        case "DELETE_TODO": {
            const id = action.payload
            return state.filter(ele => ele.id !== id)
        }

        case "UPDATE_TODO": {
            const newState = [...state]

            const id = action.payload
            const ele = newState.find(ele => ele.id === id)

            ele.completed = !ele.completed
            return newState;
        }

        default:
            return state;
    }
}

export default reducer;