package org.laporte.tyler.currency.currencytrader.controller;

import org.laporte.tyler.currency.currencytrader.domain.CurrencyConversionRequest;
import org.laporte.tyler.currency.currencytrader.service.CurrencyConverterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
public class CurrencyConverterController {

    private final CurrencyConverterService currencyConverterService;

    @Autowired
    public CurrencyConverterController(final CurrencyConverterService currencyConverterService) {
        this.currencyConverterService = currencyConverterService;
    }

    @PostMapping("/currency/convert")
    public BigDecimal convertCurrency(@RequestBody final CurrencyConversionRequest currencyConversionRequest){
        return currencyConverterService.convertCurrency(currencyConversionRequest.getCurrencyFromAmount());
    }

}
