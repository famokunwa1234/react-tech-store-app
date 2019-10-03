import React from 'react'
//mport {ProductConsumer} from "../Context";
import Hero from "../Components/Hero";
import {Link} from "react-router-dom";
import Services from "../Components/HomePage/Services";
import Featured from "../Components/HomePage/Featured";

export default function HomePage() {
    return (  
        <>
     <Hero title="awesome Gadgets" max="true">
         <Link className="main-link" to="/Product"  style={{marg: "2rem" }}>Our Product</Link>
     </Hero>
     <Services />
     <Featured />
        </>
    )
}
