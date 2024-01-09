import React from 'react'
import Product from './Product'

function Card() {
  return <>
  <div className='shop_page'> 
        <div className='card_component'>
            <Product /> 
        </div>
        <div>
            <div className='option'>
                <select className='select_qty'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <h1>Price</h1>
            </div>
            
            <button className='remove_button' >Remove</button>
         </div>
  </div>
  </>
}

export default Card