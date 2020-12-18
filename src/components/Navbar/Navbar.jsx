import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Menu, MenuItem, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';


function Navbar() {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography cariant='h6' className={classes.title} color='inherit'>
                        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' alt='Commerce.js' height='25px' className={classes.image}/>
                        Loops By Emily
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={2} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
