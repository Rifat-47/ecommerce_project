import React, { useContext } from 'react';
import classes from './Header.module.css';
import { AuthContext } from "./../store/auth_context";
import {Link} from 'react-router-dom';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    let authContext = useContext(AuthContext);
    
    return (
        <header className='fixed top-0 left-0 w-full h-20 flex justify-around items-center bg-teal-500 px-8 bg-primary'>
            <Link to="/"><h1 className='text-white text-3xl'>E-commerce Page</h1></Link>
            <nav className={`${classes.nav} text-2xl`}>
                <ul className='flex items-center'>
                    <li><Link to="/home">Home</Link></li>
                    {(authContext.isLoggedIn) ?
                        (<>
                            <li className='ml-8'><a className='text-white no-underline' href="/profile">Profile</a></li>
                            <li className='ml-8'><HeaderCartButton onClick={props.onClick} /></li>
                            <li className='ml-8' onClick={authContext.onLogout}><a className='text-white no-underline' href="/">Logout</a></li>
                        </>) :
                        (<>
                            <li className='ml-8'><Link to="/register">Sign Up</Link></li>
                            <li className='ml-8'><Link to="/login">Login</Link></li>
                            {/* <li onClick={authContext.onLogin}><a href="/">Login</a></li> */}
                        </>)
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;