import React from 'react';
import logo from '../../logo.png';
import Grid from '@material-ui/core/Grid';
import './Navbar.css';

const Navbar = () => {
    return (
        
        <div className="navbar-area">
            <Grid container>
                <Grid item>
                <div className="logo-area"> 
                    <a href="/home"><img src={logo} alt=""/></a>
                </div>
                </Grid>
                <Grid item>
                <div className="menu-area"> 
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/posts">Posts</a></li>
                    </ul>
                </div>
                </Grid>
            </Grid>
        </div>
        
    );
};

export default Navbar;