package org.laporte.tyler.currency.currencytrader.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.laporte.tyler.currency.currencytrader.domain.CurrencyType;

import java.util.Collection;

@Mapper
public interface CurrencyTypeMapper {

    @Select("SELECT CurrencyCode, CurrencyDescription, IsFromCurrency, IsToCurrency FROM CurrencyType")
    Collection<CurrencyType> getAllCurrencyTypes();
}
