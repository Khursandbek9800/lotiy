import React from 'react';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Index from "../components/faq";

function Faq(props) {
    return (
        <div>
            <Header/>
            <Index num={28}/>
            <Footer/>
        </div>
    );
}

export default Faq;