package org.laporte.tyler.currency.currencytrader.service.impl;

import org.laporte.tyler.currency.currencytrader.service.CurrencyConverterService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class CurrencyConverterServiceImpl implements CurrencyConverterService {

    @Override
    public BigDecimal convertCurrency(final BigDecimal currencyFromAmount) {
        return currencyFromAmount
                .multiply(new BigDecimal(2))
                .add(new BigDecimal(Math.random()))
                .setScale(2, BigDecimal.ROUND_HALF_UP);

    }

}
