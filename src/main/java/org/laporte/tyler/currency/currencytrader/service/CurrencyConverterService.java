package org.laporte.tyler.currency.currencytrader.service;


import java.math.BigDecimal;

public interface CurrencyConverterService {

    /**
     * Converts currency from one type to another.
     * Uses a constant formula of result = 2x + [0,1].
     * If we were calculating the real conversion rate isntead of using a constant formula,
     * we would also pass both currency types
     *
     * @param currencyFromAmount
     * @return currencyToAmount result
     */
    BigDecimal convertCurrency(final BigDecimal currencyFromAmount);

}
