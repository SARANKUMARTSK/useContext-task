import React, { useState , useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Utils/Context';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Product() {
  let [count , setCount] = useState(1)
  let handleIncrease = (e)=>{e.id==id?setCount(count+1):setCount(count)}
  let handleDecrease = (id)=>{
    if(count>0){
      setCount(count-1)
    }}
    const userContext = useContext(UserContext)
    // console.log(userContext.product);
  return <>
  <div className="products">
      {
        userContext.product.map((e,i)=>{
          return <Card key={i} style={{ width: '18rem' }}>
          <Card.Img className="product_image" variant="top" src={e.thumbnail} />
          <Card.Body>
            <Card.Title> <span style={{color:"grey" , fontWeight:"bold"}}>Brand Name : </span> 
            <span style={{color:"red",fontSize:"20px" , fontWeight:"Bold" }}>{e.title}</span> </Card.Title>
            <Card.Text>
              <span style={{color:"grey", fontSize:"20px", fontWeight:"bold"}}>Rate :</span>
              <span style={{color:"darkgreen",fontSize:"20px", fontWeight:"bold"}}> $ {e.price}</span> 
            </Card.Text>
            <Card.Text style={{color:"grey"}}>
              {e.description}
            </Card.Text> <span style={{fontWeight:"bold"}}>
            QTY : </span>&nbsp;&nbsp;&nbsp;
            <Button className='product_button' variant="danger" onClick={()=>{handleDecrease(e.id)}}><FontAwesomeIcon icon={faMinus} /></Button>&nbsp;&nbsp;&nbsp;
            <span style={{fontSize:"30px" , fontWeight:"bold" }}  >{count}</span>&nbsp;&nbsp;&nbsp;
            <Button variant="success"  onClick={()=>{handleIncrease(e.id)}}><FontAwesomeIcon icon={faPlus} /></Button>
            <br />
            <br />
            <Card.Text>
              <span style={{color:"darkkhaki", fontSize:"20px", fontWeight:"bold"}}>Total Amount :</span>
              <span style={{color:"darkgreen",fontSize:"20px", fontWeight:"bold"}}> ${e.price*count}</span> 
            </Card.Text>
  
          </Card.Body>
        </Card> 
         
        })
        
        
}
    </div>
    <div className='total_form '>
      <form className='container-fluid'>
      <label > Sub Total :</label>
      <input type="text" />
      <br />
      <br />
      <label >Shipping Charge : </label>
      <input type="text" />
      </form>
      <br />
      <label>Total :</label>
      <input type="text" />
      
    </div>
  </>
}

export default Product