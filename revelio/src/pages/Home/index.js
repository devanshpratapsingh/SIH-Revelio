import React from  'react'
import BigSearch from '../../components/BigSeaarch';
import Header from '../../components/Header';
import CardCom from "../../components/DetailsCard/CardComponent"
import './style.css'
import Car from '../../components/DetailsCard/car';

const Home = () => {

    return (
        <div className="home">
            <Header />
            <div className="home__body">
                <div className="home__body__heading">
                    Find your Destination
                </div>
                <BigSearch />
            </div>
            <div className='home__body__mid'>
                <div className='home__body__placeList'>
                    <div className='home__body__placeList__itme'>Treanding</div>
                    <div className='home__body__placeList__itme'>Rajasthan</div>
                    <div className='home__body__placeList__itme'>Delhi</div>
                    <div className='home__body__placeList__itme'>Karnatka</div>
                    <div className='home__body__placeList__itme'>Tamil Nadu</div>
                </div>
                <div className='size'>
                <Car 
          title="Delhi"
          image="https://drive.google.com/uc?export=view&id=1E1AwAZvjhnYOkAOdUWZvwHo33uacBcUg"
          description="hflwiejfoweif"
          />
                    <Car 
          title="Rajasthan"
          image="https://drive.google.com/uc?export=view&id=1L7UvSQp3NIjH8voi3byHdcyhwbp8ST2_"
          description="hflwiejfoweif"
          />
          <Car 
          title="Agra"
          image="https://drive.google.com/uc?export=view&id=1tfcguGmQKAnILA0PPsqbzkHsUTHsFORw"
          description="hflwiejfoweif"
          />
                </div>
            </div>
        </div>
    )
}

export default Home;