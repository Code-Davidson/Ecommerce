import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../asset/crown.svg'

import './header.styles.scss'

const Header = () => (
    <div  className='header'> 
        <div className='logo-container'>
            <Link  to ='/'>
            <Logo  className='logo'/>
            </Link>   
        </div> 
        <div className='options'>
            <Link className='option' to ='/shop'> SHOP </Link>
            <Link className='option' to ='/signin'> SIGN IN </Link>
            <Link className='option'  to ='/'> SIGN UP </Link>
            <Link className='option' to='/'> CONTACT </Link>
        </div>
    </div>
)


export default Header;
