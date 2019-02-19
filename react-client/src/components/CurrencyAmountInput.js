import React from 'react';

const CurrencyAmountInput = (props) => (
    <div >
        <input
            className="Currency-input"
            type="text"
            value={props.value}
            onChange={props.onChange}
        />
        <button className="Mobile-only Currency-clear" onClick={props.onClear}>
            X
        </button>
    </div>
);

export default CurrencyAmountInput;