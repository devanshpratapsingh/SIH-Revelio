import React from 'react';
import "./jh.css"
import Car from '../DetailsCard/car'

function Jharkhand() {
    return (
      <>
          <section id="home">
              <h1 class="primary">JHARKHAND</h1>
              {/* <p>Lipsum dolor sit amet consectetur adipisicing elit. Quos explicabo tenetur, soluta id laborum</p>
              <p>Lipsum dolor sit amet consectetur adipisicing elit.</p> */}
              {/* <button class="btn">Login</button> */}
          </section>
          <div className='size'>
          <Car 
          title="Delhi"
          image="https://drive.google.com/uc?export=view&id=1E1AwAZvjhnYOkAOdUWZvwHo33uacBcUg"
          description="hflwiejfoweif"
          />
          <Car />
          </div>
          </>
    );
  }
  
  export default Jharkhand;