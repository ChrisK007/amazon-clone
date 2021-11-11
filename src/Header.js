import "./Header.css";
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// rfce - component shortcut

function Header() {
    return (
        <div className='header'>        
            <div className='header_logo'>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </div>

            <div className='header_search'>
                <input className="header__searchbar" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className='header_nav'>
                 <div className="header__option">
                     <span className='header__optionLineOne'>Hello, Guest</span>
                     <span className='header__optionLineTwo'>Sign In</span>
                 </div>

                 <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                 </div>

                 <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                 </div>

                 <div className="header__optionCart">
                    <ShoppingCartIcon className="header__optionCartIcon" />
                    <span className="header__optionLineTwo header__cartCount">0</span>
                 </div>
            </div>
            
            
        </div>

        
    )
}

export default Header
