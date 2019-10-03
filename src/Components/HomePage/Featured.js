import React from 'react'
import Product from "../Product";
import {Link} from "react-router-dom";
import Title from "../AboutPage/Title";
import {ProductConsumer} from "../../Context";

export default function Featured() {
    return (
        <section className="py-5">
            <div className="container">
                {/* Title */}
            <Title title="featured product" center="true" />
            {/* product */}
            <div className="row">
                <ProductConsumer>
                {value => {
                const { featuredProducts } = value;
                return featuredProducts.map(product =>
                (<Product key={product.id} product={product} />
                ));
                }}
                </ProductConsumer>
            </div>
            </div>

        </section>
    )
}
