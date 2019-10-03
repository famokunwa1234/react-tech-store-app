import React from 'react'
import Hero from "../Components/Hero";
import contactIMg from  "../images/contactBcg.jpeg";
import Contact from "../Components/ContactPage/Contact";

export default function ContactPage() {
    return (
        <>
        <Hero img={contactIMg} />
        <Contact />
        </>
    )
}


