import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import CurrencyAmountInput from './CurrencyAmountInput';
import CurrencyTypeSelector from './CurrencyTypeSelector';
import { updateCurrencyFromAmount, updateCurrencyFromType, updateCurrencyToType } from '../actions/currencyConverter';

class CurrencyInput extends Component {

    state = {
        currencyFromOptions: [],
        currencyToOptions: []
    };

    async componentDidMount() {
        const response = await fetch('/currency/types');
        const currencyTypes = await response.json();

        this.setState({
            currencyFromOptions:
                currencyTypes
                    .filter(currencyType => currencyType.fromCurrency)
                    .map(currencyType => this.createCurrencyTypeOption(currencyType)),

            currencyToOptions:
                currencyTypes
                    .filter(currencyType => currencyType.toCurrency)
                    .map(currencyType => this.createCurrencyTypeOption(currencyType))
        });
    }

    createCurrencyTypeOption = (currencyType) => ({
        value: currencyType.currencyCode,
        label: currencyType.currencyCode,
        data: currencyType
    });

    onCurrencyAmountChange = (event) => {
        const currencyAmountChange = event.target.value;
        const currencyAmountValidationRegex = /^[0-9]+(\.)?(\.[0-9]{1,2})?$/gm;
        if(currencyAmountValidationRegex.test(currencyAmountChange) || !currencyAmountChange){
            this.props.updateCurrencyFromAmount(currencyAmountChange)
        }
    };

    onClearCurrencyAmount = () => {
        this.props.updateCurrencyFromAmount('');
    };

    onCurrencyFromTypeChange = (currencyFromType) => {
        this.props.updateCurrencyFromType(currencyFromType.data)
    };

    onCurrencyToTypeChange = (currencyToType) => {
        this.props.updateCurrencyToType(currencyToType.data)
    };

    render() {
        return (
            <div>
                <CurrencyAmountInput
                    value={this.props.currencyFromAmount}
                    onChange={this.onCurrencyAmountChange}
                    onClear={this.onClearCurrencyAmount}
                />
                <CurrencyTypeSelector
                    title="From"
                    options={this.state.currencyFromOptions}
                    onChange={this.onCurrencyFromTypeChange}
                />
                <CurrencyTypeSelector
                    title="To"
                    placeholder="USD"
                    options={this.state.currencyToOptions}
                    onChange={this.onCurrencyToTypeChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
    updateCurrencyFromAmount: (event) => dispatch(updateCurrencyFromAmount(event)),
    updateCurrencyFromType: (currencyFromType) => dispatch(updateCurrencyFromType(currencyFromType)),
    updateCurrencyToType: (currencyToType) => dispatch(updateCurrencyToType(currencyToType))
});

export default connect(mapStateToProps, mapDispatchToProps)( CurrencyInput );
