package org.laporte.tyler.currency.currencytrader.service.impl;

import org.laporte.tyler.currency.currencytrader.domain.CurrencyType;
import org.laporte.tyler.currency.currencytrader.mapper.CurrencyTypeMapper;
import org.laporte.tyler.currency.currencytrader.service.CurrencyTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CurrencyTypeServiceImpl implements CurrencyTypeService {

    private final CurrencyTypeMapper currencyTypeMapper;

    @Autowired
    public CurrencyTypeServiceImpl(final CurrencyTypeMapper currencyTypeMapper) {
        this.currencyTypeMapper = currencyTypeMapper;
    }

    @Override
    public Collection<CurrencyType> getAllCurrencyTypes() {
        return currencyTypeMapper.getAllCurrencyTypes();
    }

}
