import React, { Component } from 'react';
import Card from '../card/card.component';

const CardList = (props) => {
    console.log(props.listDetails);
    return ( 
        <div className="col-md-3 col-sm-6 col-6">
            <Card img={props.listDetails.img} title={props.listDetails.title} text={props.listDetails.description}/>
        </div>
    );
}
 
export default CardList;