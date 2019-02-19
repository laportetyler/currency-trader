import React, {Component} from 'react';
import Select from 'react-select';

export default class CurrencyTypeSelector extends Component {

    componentDidUpdate() {
        const options = this.props.options;
        const isSingleOption = options.length === 1;
        if(isSingleOption){
            this.props.onChange(options[0]);
        }
    }

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <Select
                    className="Currency-type"
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                    options={this.props.options}
                    isDisabled={this.props.options.length === 1}
                />
            </div>
        );
    }
}
