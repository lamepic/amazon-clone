import React from 'react'
import './Home.css'
import Product from './Product'
import {products, bannerImg} from '../data'

function Home() {
    return (
        <div className='home'>
            <img className="home__image" src={bannerImg} alt=""/>
            <div className="home__row">
                {products.map((product) => {
                    return (
                        <Product key={product.id} {...product} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home
