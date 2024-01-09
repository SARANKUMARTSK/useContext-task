import React from 'react'
import Card from './components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVault } from '@fortawesome/free-solid-svg-icons'

function App() {
  return <>
    <div className='my_page'>
      <header className='header'>
      <FontAwesomeIcon className='icon' icon={faVault} />
        <h1>Mobile Jone<sup className='sup'>New</sup></h1>
      </header>
      <Card />
      <hr />
      <div className='rate_page'>
        <div className='space_between'>
          <h2>SUBTOTAL:</h2>
          <h2 >Price</h2>
        </div>
        <div className='space_between'>
          <h2>SHIPPING:</h2>
          <h2>FREE</h2>
        </div>
      </div>
      <hr />
      <div className='space_between rate_page'>
        <h2>TOTAL:</h2>
        <h2>Price</h2>
      </div>
      <div></div>
       {/* <p className='flex_end rate_page'>Get Daily Cash With Nespola card</p> */}

    </div>
  </>
}

export default App