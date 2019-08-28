import React, { Component } from 'react';

class InputComponent extends Component {
    handleOnChange = (event) =>{
        this.props.handleChange(event.target.value);
    }

    render() { 
        return ( 
            <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.handleOnChange} />
         );
    }
}
 
export default InputComponent;