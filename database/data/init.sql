USE currency_converter;

CREATE TABLE CurrencyType (
    CurrencyTypeUid MEDIUMINT NOT NULL AUTO_INCREMENT,
    CurrencyCode VARCHAR(10) NOT NULL,
    CurrencyDescription VARCHAR(50) NOT NULL,
    IsFromCurrency BOOLEAN,
    IsToCurrency BOOLEAN,
    PRIMARY KEY (CurrencyTypeUid)
);

INSERT INTO CurrencyType (CurrencyCode, CurrencyDescription, IsFromCurrency, IsToCurrency)
VALUES ('CAD', 'Canadian Dollar', true, false);

INSERT INTO CurrencyType (CurrencyCode, CurrencyDescription, IsFromCurrency, IsToCurrency)
VALUES ('GBP', 'Pound Sterling', true, false);

INSERT INTO CurrencyType (CurrencyCode, CurrencyDescription, IsFromCurrency, IsToCurrency)
VALUES ('EUR', 'Euro', true, false);

INSERT INTO CurrencyType (CurrencyCode, CurrencyDescription, IsFromCurrency, IsToCurrency)
VALUES ('USD', 'United States Dollar', false, true);
