import * as actionTypes from '../Actions/Actions';
const initialState = {
    menu: [],
    dishes: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MENU_FETCH:
            return {
                ...state,
                state: state.menu = action.value
            }
        case actionTypes.DISHES_FETCH:
            return {
                ...state,
                state: state.dishes = action.value1
            }
        default:
            return state
    }
};

export default reducer;