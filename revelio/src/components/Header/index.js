import React from  'react'
import LoginButton from '../LoginButton';
import './style.css'

const Header = () => {

    return (
        <div className="header">
            <div className="header__navbar">
                <div className='navbar__itemsWrapper'>
                    <div className="navbar__items">
                        <div className="navbar__items__logo">REVELIO</div>
                    </div>
                    <div className="navbar__items">
                        <div className="navbar__items__text">Link__1</div>
                    </div>
                    <div className="navbar__items">
                        <div className="navbar__items__text">Link__2</div>
                    </div>
                </div>
                <div className='navbar__itemsWrapper'>
                    <LoginButton />
                </div>
            </div>
        </div>
    )
}

export default Header;