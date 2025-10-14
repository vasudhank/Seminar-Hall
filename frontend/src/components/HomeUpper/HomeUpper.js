import React, { useEffect, useState } from 'react'
import "./HomeUpper.css"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomeUpper() {

  
  const auth = useSelector((state)=> state.user)

  const images = [
    require("../../assets/HomePic.png"),
    require("../../assets/HomePic2.png"),
    require("../../assets/HomePic3.png"),
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Automatically slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
   <>
   
   <div className="logo-container">
        <img src={require("../../assets/BIT-Mesra.png")} alt="Logo" className="logo-img" />
        </div>
    <div className="logo-container2">
        <img src={require("../../assets/images.png")} alt="Logo" className="logo-img2" />
        </div>
    
    <div className="slider-container">

        
        {images.map((img, index) => (
          <div
  key={index}
  className={`slide ${index === currentIndex ? "active" : ""} ${
    window.innerWidth <= 500 ? "contain-mode" : ""
  }`}
  style={{ backgroundImage: `url(${img})` }}
></div>
        ))}
        <div className="slider-dots">
          {images.map((_, index) => (
            <input
              key={index}
              type="radio"
              name="slider-dot"
              className="dot"
              checked={currentIndex === index}
              onChange={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    <Box>
    <Grid container justifyContent={'center'}>
        <Grid item xs={11} sm={8} md={8} lg={7} xl={6}   className='navbar'>
          <div className='list-item' style={{display:'flex'}}>
            <div className='list-item-children'>
            <Link to="/">HOME</Link>
            </div>
            <div  className='list-item-children'>
              {
                (auth.status === "Authenticated" && auth.user==='Admin')?( 
                  <Link to="/admin/hall">ADMIN</Link>
                ):(
                  <Link to="/admin_login">ADMIN</Link>
                )
              }
            </div>
            <div  className='list-item-children'>
            {
                (auth.status === "Authenticated" && auth.user === "Department")?(
                  <Link to="/department/booking">DEPARTMENT</Link>
                  ):(
                    <Link to="/department_login">DEPARTMENT</Link>
                    )
              }
            </div>
          </div>

        </Grid>
      </Grid>
      </Box>

    

   </>
  )
}
