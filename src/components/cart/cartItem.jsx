import React, { Component } from "react";
import InputComponent from "../commen/inputComponent";

class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.cart.productImg} />
        </td>
        <td>{this.props.cart.name}</td>
        <td>
          <button className="btn btn-default btn-xs"  onClick={this.props.onPlusClick}><i className="fa fa-plus"></i></button> 
        </td>
        <td>  
          <InputComponent type={"text"} name={this.props.cart.name+this.props.cart.id} value={this.props.cart.qty} handleChange={this.props.onChangeItemQty} />
        </td>
        <td>  
          <button className="btn btn-default btn-xs" onClick={this.props.onMinusClick}><i className="fa fa-minus"></i></button> 
        </td>
        <td className="text-right">{this.props.cart.price}</td>
        <td className="text-right">
          <button className="btn btn-sm btn-danger" onClick={this.props.onItemRemove}>
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
