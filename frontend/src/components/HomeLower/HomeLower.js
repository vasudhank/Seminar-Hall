import React from 'react'
import "./HomeLower.css"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HomeCard from '../HomeCard/HomeCard';
import HomeFooter from '../HomeFooter/HomeFooter';
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";
import { useSelector } from 'react-redux';
export default function HomeLower() {


  const auth = useSelector((state)=> state.user)
  
  return (
    <>
    <div className='lower-div'>
        <div className='title'>
              <Slide direction="left" triggerOnce>
                <span>Book your hall</span>
                <span>before your coffee gets cold</span>
              </Slide>
        </div>

        <div className='desc' style={{textTransform:'none'}}>
            <div>
            Our <span class="highlight">Hall Booking System</span> is the home to all your hall bookings.<br/>
            <span>Seamless Experience. Centralized Platform. Easy Bookings</span>
               
            </div>

        </div>

        <br />
        <br />

         
        <Grid container spacing={2} justifyContent={'center'} >
         
        <Grid item justifyContent={'center'} alignItems={'center'}>
                <Button size='large'  variant="contained" className='btn' disableElevation>
                {
                (auth.status === "Authenticated" && auth.user === "Department")?(
                  <Link to="/department/booking">BOOK NOW</Link>
                  ):(
                    <Link to="/department_login">BOOK NOW</Link>
                    )
              }
            </Button>
        </Grid>
      </Grid>

      <br />
        <br />

        <Slide>
        <HomeCard/>
        </Slide>

        <br/>
        <br/>

        <HomeFooter/>


        





    </div>
    </> 
  )
}
