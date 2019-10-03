import React from 'react';
import Info from "../Components/AboutPage/Info";
import Hero from "../Components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

export default function AboutPage() {
    return (
        <div>
            <Hero img={aboutBcg} />
            <Info />
        </div>
    )
}
