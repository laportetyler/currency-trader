// Currency Converter Reducer

const currencyConverterDefaultState = {
    currencyFromAmount: '',
    currencyFromType: undefined,
    currencyToType: undefined
};

export default (state = currencyConverterDefaultState, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENCY_FROM_AMOUNT':
            return {
                ...state,
                currencyFromAmount: action.currencyFromAmount
            };
        case 'UPDATE_CURRENCY_FROM_TYPE':
            return {
                ...state,
                currencyFromType: action.currencyFromType
            };
        case 'UPDATE_CURRENCY_TO_TYPE':
            return {
                ...state,
                currencyToType: action.currencyToType
            };
        default:
            return state;
    }
}
