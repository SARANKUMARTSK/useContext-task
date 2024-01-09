import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Product() {
  return <>
  <div className='product'>
        <div><img className='product_img' src="https://i.dummyjson.com/data/products/4/1.jpg" alt="" /></div>
            <div className='product_details'>
            <h3>iPhone 9</h3>
                <details>
                    <summary style={{color:"Red" , fontWeight:"bold"}}>Product Details</summary>
                    <span><b>Brand :</b> Apple</span>
                    <br />
                    <span style={{color:"blue"}}><b>An apple mobile which is nothing like apple</b> </span>
                    <br />
                    <span><b>Category :</b> SmartPhones</span>
                </details>
            <br />
         <span className='star_icon' > <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon style={{color:"white"}} icon={faStar} /></span>
            


        </div>
  </div>
  </>
}

export default Product