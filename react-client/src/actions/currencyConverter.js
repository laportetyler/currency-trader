// Currency Converter Actions

export const updateCurrencyFromAmount = (currencyFromAmount) => ({
    type: 'UPDATE_CURRENCY_FROM_AMOUNT',
    currencyFromAmount
});

export const updateCurrencyFromType = (currencyFromType) => ({
    type: 'UPDATE_CURRENCY_FROM_TYPE',
    currencyFromType
});

export const updateCurrencyToType = (currencyToType) => ({
    type: 'UPDATE_CURRENCY_TO_TYPE',
    currencyToType
});
