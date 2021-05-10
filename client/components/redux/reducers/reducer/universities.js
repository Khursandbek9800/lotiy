const name = 'sidebar'

const types = {
    TOGGLE: `TOGGLE_${name}`,
    UChange: `UChange_${name}`,
    getAll:`GetAll_${name}`
}
const initialState = {
    open: false,
    country:"Rossiya"
}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.getAll: {
            return {
                ...state,
                country: "Rossiya"
            }
        }
        case types.UChange: {
            return {
                ...state, country: action.payload
            }
        }
        default:
            return {
                state
            }
    }
}
export const toggle = () => dispatch => {
    dispatch({type: types.TOGGLE});
}
export const UNChange = payload => dispatch => {
    dispatch({type: types.UChange, payload:payload});
}
export const getAll = () => dispatch => {
    dispatch({ type: types.getAll });
}