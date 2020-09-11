const initialState = [ {
    id: 1,
    title: 'big bad',
    copy: 'man is this dude fugly'
}]

export default function notes(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_NOTES_SUCCESS':
            return[...action.notes]
        default:
            return state
    }
}