const initialState = []

export default function notes(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return[...action.notes]
        case 'ADD_NOTE':
            return 'added'
        case 'DELETE_NOTE':
            return 'deleted'
        default:
            return state
    }
}