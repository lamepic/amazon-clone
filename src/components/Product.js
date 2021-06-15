import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'
import {actionTypes} from '../reducer'

function Product({id, title, price, rating, image}) {
    const [{}, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: actionTypes.ADD_TO_BASKET,
            payload: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((index) => (
                        <i key={index} class="fa fa-star"></i>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
