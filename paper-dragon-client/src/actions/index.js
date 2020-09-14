export const fetchNotesSuccess = (notes) => {
    return {
        type: 'FETCH_NOTES_SUCCESS',
        notes 
    }
}

export const addNote = (newNote) => {
    return {
        type: 'ADD_NOTE',
        newNote
    }
}

export const deleteNote = (noteId) => {
    return {
        type: 'DELETE_NOTE',
        noteId
    }
}

export const editNote = () => {

}