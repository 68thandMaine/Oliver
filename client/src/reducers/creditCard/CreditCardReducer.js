import types from '../../constants';
import initialstate from '../../constants/InitialState';

const CreditCardReducer = ( state = initialstate.CreditCard, action ) => {
    let newState;
    switch(action.type) {
        case types.RECEIVE_CREDITCARDS: {
            newState = Object.assign({}, state);
            return newState;
        }
        default:
            return state;
    }
};

export default CreditCardReducer;