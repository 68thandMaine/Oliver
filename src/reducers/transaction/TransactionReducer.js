import types from '../../constants';
import initialState from '../../constants/InitialState';

const TransactionReducer = ( state = initialState.Transaction, action ) => {
    let newState;
    switch(action.type) {
        case types.RECEIVE_TRANSACTIONS: {
            newState = Object.assign({}, state);
            return newState;
        }
        default:
            return state;
    }
};

export default TransactionReducer;