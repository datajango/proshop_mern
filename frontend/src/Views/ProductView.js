import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct } from '../Actions/product-actions.js';
import { Row, Col, Image, ListGroup,ListGroupItem, Card, Button} from 'react-bootstrap';
import Rating from '../Components/Rating';
import Loader from '../Components/Loader.js';
import Message from '../Components/Message.js';

const ProductView = ({ match}) => {
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails); // reducer defined in frontend\src\store.js
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(getProduct(match.params.id))
    }, [dispatch, match]);

    const productsDetailsFrag = () => {
        return (<>
            <Link className='btn btn-dark my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={5}><Image src={product.image} alt={product.name} fluid></Image></Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} Reviews`}></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Descrtiption: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price</Col>
                                    <Col><strong>${product.price}</strong></Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>)
    }

    const loadingFrag = () => {
        return (<Loader />)
    }

    const errorFrag = () => {
        return (<Message variant='danger'>{error}</Message>)
    }

    return (
        <>
            { loading ? loadingFrag() : error ? errorFrag() : productsDetailsFrag()}
        </>
    )
}

export default ProductView
