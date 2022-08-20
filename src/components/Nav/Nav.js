import React from 'react'
import './Nav.css'
import { AppBar, Button, } from '@material-ui/core'
import Topography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Icon } from "@material-ui/core";
import GitHubIcon from '@mui/icons-material/GitHub';


const Nav = () => {
  return (
   
    <Grid
    container
   style={{ minHeight: '15vh' }}>




   <AppBar style={{alignItems: 'center'}}>
    <Topography variant="h4">Random Quote Generator</Topography>
    <Button
    size='large'
    endIcon={<GitHubIcon/>}
    href='https://github.com/mirthepeer/Random_QuoteAPI'
    >View Code</Button>
    
   </AppBar>

   </Grid>
   
   
    // <div className='Nav-bar'>
    //     <div className='title'>
    //         <h1>Random Quote Generator</h1>
    //     </div>

    // <div className='nav-element'>
    // <a href='https://github.com/mirthepeer/Random_QuoteAPI'>
    //     <div className='view-link'>
    //         <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrnjjT5fU58JiJk9w4L6VXCNtVxajn3Ygt3mWSGodgQ&s'></img></div>
    //         <div><p className='view-code'>  View Code </p></div>
    //     </div>
    
        
    //    </a>
    // </div>

    // </div>
  )
}

export default Nav