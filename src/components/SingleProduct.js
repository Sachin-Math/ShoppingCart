import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Context/Context';
import Rating from './Rating'

const SingleProduct = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState();

    return (
        <div className='products'>
            <Card.Body>

                <Card.Img variant='top' src={prod.image} alt={prod.name} />
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }} >
                    <span>{prod.price.split(".")[0]}</span>
                    {prod.fastDelivery ? (
                        <div>fastDelivery</div>
                    ) : (
                        <div>4day delivery</div>
                    )}
                    <Rating rating={prod.ratings} />
                </Card.Subtitle>
                {
                    cart.some(p => p.id === prod.id) ? (
                        <Button
                            onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: prod,
                                });
                            }}
                            variant="danger" > Remove from cart </Button>
                    ) : (
                        <Button onClick={() => {
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: prod,
                            })

                        }} disabled={prod.inStock}>
                            {prod.inStock ? ("out of stock") : ("add to cart")}
                        </Button>)}


            </Card.Body>
        </div >
    )
}

export default SingleProduct