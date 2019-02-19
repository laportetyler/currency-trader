package org.laporte.tyler.currency.currencytrader.controller;

import org.laporte.tyler.currency.currencytrader.domain.CurrencyType;
import org.laporte.tyler.currency.currencytrader.service.CurrencyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class CurrencyTypeController {

    private final CurrencyTypeService currencyTypeService;

    @Autowired
    public CurrencyTypeController(final CurrencyTypeService currencyTypeService) {
        this.currencyTypeService = currencyTypeService;
    }

    @GetMapping("/currency/types")
    public Collection<CurrencyType> getCurrencyTypes() {
        return currencyTypeService.getAllCurrencyTypes();
    }

}
