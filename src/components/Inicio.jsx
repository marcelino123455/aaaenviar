import React from 'react';
import Header from './Header';
import Footer from './footer';
import Slider from './slider'
import TicketCards from './cards';


function Inicio(){
    return(
        <div>
            <Header></Header>
            <Slider></Slider>
            <TicketCards></TicketCards>
            <Footer></Footer>
        </div>
    );

}

export default Inicio;
