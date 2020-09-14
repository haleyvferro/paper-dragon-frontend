const initialState = []

export default function notes(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return[...action.notes]
        case 'ADD_NOTE':
            return[...state, action.newNote]
        case 'DELETE_NOTE':
            return state.filter(note => note.id !== action.noteId)
        default:
            return state
    }
}