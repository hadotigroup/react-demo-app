import React, { Component } from 'react';

const Card = (props) => {
    return ( 
            <div className="card">
                <img className="card-img-top" src={props.img} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary m-2"><i className="fa fa-link"></i></a>
                    <a href="#" className="btn btn-primary m-2"><i className="fa fa-shopping-cart"></i></a>
                </div>
            </div>
     );
}
 
export default Card;