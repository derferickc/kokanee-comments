import React from 'react'
import { Theme, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import CommentList from '../components/CommentListClass'
import Grid from '@material-ui/core/Grid';

import { makeComments } from '../models/Comment'
import Navbar from "../components/Navbar"

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      fontFamily: '"IBM Plex Sans", Arial, Helvetica',
      width: '100%',
      maxWidth: '100vw',
      margin: 'auto'
    },
    hero: {
       margin: 'auto',
       textAlign: 'center'
    },
    media: {
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        width: '50%',
        margin: 'auto'
      }
    },
    description: {
      width: '80%',
      margin: 'auto',
      textAlign: 'center'
    },
  }
})

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>

        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            Welcome to the Kokanee Exploratory Project!
          </Typography>
        </Grid>

        <div className={classes.hero}>
          <img
            className={classes.media}
            alt="Kokanee Creek is also known as Depot Creek"
            src="https://www.waterfallsnorthwest.com/pictures/Depot_Creek_Falls_167.jpg"
          />
        </div>

        <div className={classes.description}>
          <Typography gutterBottom variant="body1">
            <p><strong>The project was named after the beautiful creek because its uncanny resemblance to the national treasure. The comments below were left by visitors who were filled with awe; comments are appended and displayed as they are received.</strong></p>
          </Typography>
        </div>

        <Divider orientation='horizontal' variant='fullWidth' />

        <Grid item xs={12}>
          <CommentList initialComments={makeComments(10)} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
