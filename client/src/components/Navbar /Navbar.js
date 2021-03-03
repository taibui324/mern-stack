import React from 'react';
import {AppBar , Typography} from '@material-ui/core';


import memories from '../../images/memories.jpg';
import useStyles from './styles'
 
 const Navbar = () => {
     
    const classes = useStyles ();
<AppBar className={classes.appBar} position="static" color="inherit">
<Typography className={classes.heading} variant="h2" align="center">
 On the card app
</Typography>
<img
  className={classes.image}
  src={memories}
  alt="icon"
  height="60"
/>
</AppBar>

);


export default Navbar; 