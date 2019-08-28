import React, { Component } from 'react';
import WooCommerceAPI from 'woocommerce-api';
import CardList from '../card-list/card-list.component';
import Product from './product.component';

class Products extends Component {
    state = { 
        products : [
            {img:'https://dummyimage.com/50x50/55595c/fff', title:'sdfdsfs', description:'sdfsdfsdfd'},
            {img:'https://dummyimage.com/50x50/55595c/fff', title:'sdfdsfs', description:'sdfsdfsdfd'},
            {img:'https://dummyimage.com/50x50/55595c/fff', title:'sdfdsfs', description:'sdfsdfsdfd'},
            {img:'https://dummyimage.com/50x50/55595c/fff', title:'sdfdsfs', description:'sdfsdfsdfd'},
            {img:'https://dummyimage.com/50x50/55595c/fff', title:'sdfdsfs', description:'sdfsdfsdfd'}
        ]
     }
     
     componentDidMount() {
        // ...
        const WooCommerce = new WooCommerceAPI({
            url: 'https://localhost/wordpress',
            consumerKey: 'ck_be79b1778df042b2b66bfb7c92562040505c06f8',
            consumerSecret: 'cs_ca1160f853137e81ae50db8dfb9fa3068fe5f074',
            wpAPI: true,
            version: 'wc/v3',
            queryStringAuth: true 
          });
          const products = [];
          WooCommerce.get('products').then(product =>{ 
            JSON.parse(product.response).forEach((product,index) => {
                products[index] = product;
            });
          });
          
      }


    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <Product/>
                    {/* { this.state.products.map((product) =>(
                       <CardList listDetails={product} />
                    ))} */}
                </div>
            </div>
         );
    }
}
 
export default Products;