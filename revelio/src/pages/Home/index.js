import React from  'react'
import BigSearch from '../../components/BigSeaarch';
import Header from '../../components/Header';
import CardCom from "../../components/DetailsCard/CardComponent"
import './style.css'

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
                <div >
                    <CardCom />
                    <CardCom />
                    <CardCom />
                </div>
            </div>
        </div>
    )
}

export default Home;