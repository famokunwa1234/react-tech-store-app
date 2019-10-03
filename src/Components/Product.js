import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaSearch, FaCartPlus} from "react-icons/fa";
import { ProductConsumer } from "../Context";
export default function Product({ product }) {
    return (
        <ProductConsumer>
          {value => {
          const {addToCart, setSingleProduct} = value;
          return (
        <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 
        col-lg-4 my-3">
          <div className="card">
            <div className="img-container">
            <img
             src={product.image} className="card-img-top p-5"
            alt="product" />
            </div>
          </div>
        </ProductWrapper>
          );
          }}
        </ProductConsumer>  
    )
}


const ProductWrapper = styled.div`
`;