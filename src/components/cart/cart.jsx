import React, { Component } from "react";
import './cart.css';
import CartItem from "./cartItem";


class Cart extends Component {
  state = {
      subTotal : 0,
      total: 0,
      carts : [
          {id : 1, name:"Reebok Shoes", productImg: 'https://dummyimage.com/50x50/55595c/fff', qty:1, price:2999},
          {id : 2, name:"Reebok T-Shirts", productImg: 'https://dummyimage.com/50x50/55595c/fff', qty:1, price:999},
          {id : 3, name:"Puma Joggers", productImg: 'https://dummyimage.com/50x50/55595c/fff', qty:1, price:1289},
          {id : 4, name:"Spark hand bands", productImg: 'https://dummyimage.com/50x50/55595c/fff', qty:3, price:596}
        ]
  };


  handleOnChangeItemQty = (event, cart) => {
     
    //   console.log(props);
    console.log(event);
    const carts = [...this.state.carts];
    const index = carts.indexOf(cart);
    carts[index] = {...cart};
    carts[index].qty = event;
    this.setState({ carts : carts });
    console.log(carts);
    this.calculateSubTotal();
  }

  handleItemRemove = (productId) => {
    console.log('handleRemoveItem');
    const carts = this.state.carts.filter(c => c.id !== productId);
    this.setState({ carts : carts });
    this.calculateSubTotal();
  }

  calculateSubTotal = () =>{
    let subTotal = this.state.carts.forEach(element => {
      return (element.qty * element.price);  
    });
    console.log("calculateSubTotal : ", subTotal);
    this.setState({ subTotal: subTotal });
  }

  handlePlusClick = (product) =>{
    console.log("handlePlusClick");
    const carts = [...this.state.carts];
    const index = carts.indexOf(product);
    carts[index] = product;
    carts[index].qty++;
    this.setState({ carts });
  }

  handleMinusClick = (product) => {
    console.log("handleMinusClick");
    const carts = [...this.state.carts];
    const index = carts.indexOf(product);
    carts[index] = product;
    carts[index].qty--;
    this.setState({ carts });
  } 

  shouldComponentUpdate(nextProps, nextState){
    console.log("nextProps : ", nextProps);
    console.log("nextState : ", nextState);
    return true;
  }

  render() {
    return (
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Product</th>
                    <th scope="col">Available</th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-right">
                      Price
                    </th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.carts.map(c  => (
                      <CartItem
                        key={c.id}
                        cart={c}
                        onChangeItemQty={(event) => this.handleOnChangeItemQty(event,c)}
                        onItemRemove={() => this.handleItemRemove(c.id)}
                        onPlusClick={() => this.handlePlusClick(c)}
                        onMinusClick={() => this.handleMinusClick(c)}
                      ></CartItem>
                  )) }
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Sub-Total</td>
                    <td className="text-right">
                        { `${this.state.subTotal}` }
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Shipping</td>
                    <td className="text-right">
                      
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td className="text-right">
                      <strong>{ `${this.state.total}` }</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <button className="btn btn-block btn-light">
                  Continue Shopping
                </button>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <button className="btn btn-lg btn-block btn-success text-uppercase">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
