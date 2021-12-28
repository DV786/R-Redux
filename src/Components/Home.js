import React from 'react'

export default function Home() {
    return (
        <div>
            <div className='addTocart'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="Cart" />
            </div>
            <h1>Home Component</h1>
           
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6U3V_MBKP9OpwTFOXSjY7Pneh57tISp1XZKevGhU6C6jmb8ay_fkRfVW2-84dcHRDjRU&usqp=CAU" alt="No Img Found" />
                </div>
                <div className='item'>
                    <span>I -Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>
                
            </div>
        </div>
    )
}
