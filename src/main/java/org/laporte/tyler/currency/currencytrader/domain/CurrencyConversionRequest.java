package org.laporte.tyler.currency.currencytrader.domain;

import java.math.BigDecimal;

public class CurrencyConversionRequest {

    private BigDecimal currencyFromAmount;
    private String currencyFromCode;
    private String currencyToCode;

    public CurrencyConversionRequest(){
        // default constructor for RequestBody mapping
    }

    public CurrencyConversionRequest(final BigDecimal currencyFromAmount,
                                     final String currencyFromCode,
                                     final String currencyToCode) {

        this.currencyFromAmount = currencyFromAmount;
        this.currencyFromCode = currencyFromCode;
        this.currencyToCode = currencyToCode;
    }

    public BigDecimal getCurrencyFromAmount() {
        return currencyFromAmount;
    }

    public String getCurrencyFromCode() {
        return currencyFromCode;
    }

    public String getCurrencyToCode() {
        return currencyToCode;
    }

}
