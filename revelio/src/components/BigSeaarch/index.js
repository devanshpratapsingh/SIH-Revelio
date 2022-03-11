import React, { useState } from 'react';
import './style.css';
import {GoSearch} from 'react-icons/go';
const BigSearch = () => {
    // const [search, setSearch] = useState('');
    return(
        <div className='bigSearch'>
            <GoSearch size={80}/>
            <input 
                className='bigSearch__searchBox'
                // onChange={(e) => setSearch(e.target.value)}
                // value={search}
                placeholder='Search your dream destination'
            />
        </div>
    )
}

export default BigSearch;