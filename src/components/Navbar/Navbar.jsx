import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ totalItems }) {
    const classes = useStyles();
    const location = useLocation();


    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/cart' variant='h6' className={classes.title} color='inherit'>
                        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='Commerce.js' height='25px' className={classes.image}/>
                        Loops By Emily
                    </Typography>
                    <div className={classes.grow}/>
                    
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
