import React, {useState} from 'react';
import './style.css'
import Car from '../../components/DetailsCard/car'
import Header from '../../components/Header';
import Places from './components/Places';
import State from './components/States'

const Search = () => {
    const [active, setActive] = useState('places');

    const ActiveTab = () => {
        switch (active){
            case 'places':
                return(<Places />);
            case 'state': 
                return(<State />);
            default: 
                return(<Places />);            
        }
    }
    return(
        <div className='search'>
            <Header />
            <div className='search-main'>
                <div className='search-header'>
                    <div className='search-header-title'>
                        searched
                    </div>
                    <div className='search-header-options'>
                        <div className='search-header-option' onClick={() => setActive('place')}>
                            Place
                        </div>
                        <div className='search-header-option' onClick={() => setActive('state')}>
                            State
                        </div>
                    </div>
                    <div className='search-header-searchbar'>
                        <input className='searchbar'>

                        </input>
                    </div>
                </div>
                <div>
                    <ActiveTab />
                </div>
            </div>
        </div>
    );
}

export default Search;