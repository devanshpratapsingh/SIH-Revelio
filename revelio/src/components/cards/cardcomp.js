import React from 'react';
import "./style.css"
import Cards from '../DetailsCard/CardComponent'

function CardCom() {
    return (
      <>
          <section id="home">
              <h1 class="primary">RAJASTHAN</h1>
              {/* <p>Lipsum dolor sit amet consectetur adipisicing elit. Quos explicabo tenetur, soluta id laborum</p>
              <p>Lipsum dolor sit amet consectetur adipisicing elit.</p> */}
              {/* <button class="btn">Login</button> */}
          </section>
          <Cards />
          <Cards />
          </>
    );
  }
  
  export default CardCom;