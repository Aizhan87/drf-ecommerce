import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen() {
  const navigate = useNavigate()
  const {id} = useParams()
  const location = useLocation()
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  
  
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const {cartItems} = cart
  console.log(cartItems)

  useEffect(() =>{
    if(id){
        dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])


  return (
    <div>CartScreen</div>
  )
}

export default CartScreen