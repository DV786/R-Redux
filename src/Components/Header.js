import React from 'react'

export default function Header(props) {
    // console.log("Header",props.data);
    return (
        <div>
            <div className='addTocart'>
                <span className='cart-count'>{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="Cart" />
            </div>
        </div>
    )
}
