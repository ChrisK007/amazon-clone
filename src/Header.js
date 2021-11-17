import "./Header.css";
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";


// rfce - component shortcut

function Header() {
    const [{user, cart}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>        
                <div className='header_logo'>
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
                </div>
            </Link>

            <div className='header_search'>
                <input className="header__searchbar" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className='header_nav'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className='header__optionLineOne'>Hello, {user ? user.email :'Guest'}</span>
                        <span className='header__optionLineTwo'>{user ?'Sign Out' : 'Sign In'}</span>
                    </div>
                 </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                 <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                 </div>
                
                <Link to='/checkout'>
                    <div className="header__optionCart">
                        <ShoppingCartIcon className="header__optionCartIcon" />
                        <span className="header__optionLineTwo header__cartCount">{cart?.length}</span>
                    </div>
                 </Link>
            </div>
            
            
        </div>

        
    )
}

export default Header
