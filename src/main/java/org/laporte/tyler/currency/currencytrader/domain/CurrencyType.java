package org.laporte.tyler.currency.currencytrader.domain;

public class CurrencyType {

    private final String currencyCode;
    private final String currencyDescription;
    private final boolean isFromCurrency;
    private final boolean isToCurrency;

    public CurrencyType(final String currencyCode,
                        final String currencyDescription,
                        final boolean isFromCurrency,
                        final boolean isToCurrency) {

        this.currencyCode = currencyCode;
        this.currencyDescription = currencyDescription;
        this.isFromCurrency = isFromCurrency;
        this.isToCurrency = isToCurrency;
    }

    public String getCurrencyCode() {
        return currencyCode;
    }

    public String getCurrencyDescription() {
        return currencyDescription;
    }

    public boolean isFromCurrency() {
        return isFromCurrency;
    }

    public boolean isToCurrency() {
        return isToCurrency;
    }
}
