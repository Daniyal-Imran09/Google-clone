import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import logo from '../images/google-ar21.svg'
import Search from '../components/Search.js';

function Home() {
  return (
    <div className='home'>
     <div className='home_header'>
       <div className='home_left_header'>
         <Link to = "/about">about</Link>
         <Link to = "/store">store</Link>
       </div>

       <div className='home_right_header'>
       <Link to = "/gmail">gmail</Link>
       <Link to = "/images">images</Link>
       <AppsIcon/>
       <Avatar/>

       </div>

       </div>
     <div className='home_body'>
          <img src={logo} alt="" width="300px" height="200px"/>
     </div>
     <div className='home_input'>
         <Search />
     </div>

    </div>
  )
}

export default Home