import React, { useEffect, useState } from 'react';
import { async } from 'q';
import WooCommerceAPI from 'woocommerce-api';

const Product = () => {
    const [ products, setProducts ] = useState({});
    const [ hasError, setError ] = useState(false);
    
    async function fetchProduct(){
        const WooCommerce = new WooCommerceAPI({
            url: 'https://localhost/wordpress',
            consumerKey: 'ck_be79b1778df042b2b66bfb7c92562040505c06f8',
            consumerSecret: 'cs_ca1160f853137e81ae50db8dfb9fa3068fe5f074',
            wpAPI: true,
            version: 'wc/v3',
            queryStringAuth: true 
          });
          const res = await WooCommerce.get('products').then((product) => setProducts(product));
          console.log(res);
    }

    useEffect(()=>{
        fetchProduct();
    }, [])

    return ( 
        <div>{JSON.stringify(products)}</div>
     );
}
 
export default Product;