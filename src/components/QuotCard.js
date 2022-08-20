import React, { useEffect, useState } from 'react'
import './QuotCard.css'
import Button from '@material-ui/core/Button'
import 'fontsource-roboto'
import Topography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'

import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia  from '@material-ui/core/CardMedia'
import CardActions  from '@material-ui/core/CardActions'
import CardActioArea  from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors'





function QuotCard() {
  
  const [quote, setquote] = useState({
    content:"" ,
    author:""
  })  
  const [button, setbutton] = useState(false)

  function refresh(){
    setbutton(prevState => !prevState)
  }

  useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data =>  {
        let current = {content : data.content , author : data.author }
        setquote(current)
    })
    
    // .then (data => { setquote({ content:data.content,author:data.author})
        
        
        
    

   console.log("this is result"+quote.author,quote.content)

  }, [button])

  const useStyles = makeStyles({
    root: {
      minHeight:40, textAlign:'center'
    },
  })
  const classes = useStyles()
  return (
    
    <div className={classes.root}>
         
    <Grid
       container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '70vh' }}
  >      
   <Card style={{ margin:20, textAllign: 'center', background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,56,255,0.5938084706538865) 100%, rgba(0,172,227,0.4481502073485645) 100%)', color:'white'  }}>
        <CardActioArea>
        <CardContent style={{height:200, width:600, padding:20} }>
          <Topography style={{borderRadius:10, borderBlockColor: 'black', background:'white', color:'black'}}>{quote.author}</Topography>
          <Topography>{quote.content}</Topography>
        </CardContent>
        
        
        <Button 
        variant='contained'
        color="success"
        onClick={refresh}
        size='large'
        style={{marginBottom:20}}
        
    
    >New Quote</Button>

        </CardActioArea>
      

        </Card>
  
  </Grid>
  
  </div>
       
    
  )
}

export default QuotCard

