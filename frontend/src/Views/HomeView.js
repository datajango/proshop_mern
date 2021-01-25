import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../Components/Product';
import { listProducts } from '../Actions/product-actions.js';
import Loader from '../Components/Loader.js';
import Message from '../Components/Message.js';

const HomeView = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    const productsGridFrag = () => {
        return (
            <Row>
                {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}></Product>
                </Col>))}
            </Row>)
    }

    const loadingFrag = () => {
        return (<Loader/>)
    }

    const errorFrag = () => {
        return (<Message variant='danger'>{ error }</Message>)
    }

    return (
        <>
            <h1>Latest Products</h1>
            { loading ? loadingFrag() : error ? errorFrag(): productsGridFrag() }
        </>
    )
}

export default HomeView
