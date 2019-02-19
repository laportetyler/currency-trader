import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrencyResult extends Component {

    interval = undefined;

    state = {
        convertedCurrencyAmount: undefined
    };

    async componentWillReceiveProps(nextProps){
        clearInterval(this.interval);
        if(nextProps.currencyFromAmount && nextProps.currencyFromType && nextProps.currencyToType){
            this.interval = await setInterval(() => this.convertCurrency(nextProps), 100);
        } else {
            await new Promise(resolve => setTimeout(resolve, 200));
            this.setState({ convertedCurrencyAmount: '' });
        }
    }

    async convertCurrency(nextProps) {

        const currencyConversionValues = {
            currencyFromAmount: nextProps.currencyFromAmount,
            currencyFromCode: nextProps.currencyFromType.currencyCode,
            currencyToCode: nextProps.currencyToType.currencyCode
        };

        await fetch('/currency/convert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currencyConversionValues)
        }).then(
            response => response.json(),
            error => console.log('An error eoccured.', error)
        ).then(
            convertedCurrencyAmount => {this.setState({ convertedCurrencyAmount })}
        )
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if( this.state.convertedCurrencyAmount ) {
            return (
                <div>
                    <span>
                        { this.props.currencyFromAmount } { this.props.currencyFromType.currencyDescription} =
                    </span>
                    <br/>
                    <span>
                        { this.state.convertedCurrencyAmount } { this.props.currencyToType.currencyDescription }
                    </span>
                </div>
            );
        } else {
            return <div/>
        }
    }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)( CurrencyResult );
