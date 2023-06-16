import React, { useState } from 'react'
import  './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from '../Stateprovider';
import { actionTypes } from '../reducer';

function Search({hidebuttons = false}) {
 const[{},dispatch]=useStateValue();
  const [input ,setinput] = useState("");
  const Navigate = useNavigate();

 const search = e =>{
  e.preventDefault();
  console.log("you have search the field",input);
  dispatch({
    type:actionTypes.SET_SEARCH_TERM  ,
    term :input
  })
  Navigate('/search');
}

  return (
    <form className='search'>
        <div className='search_input'>
      <SearchIcon className='search_inputicon'/>
      <input value ={input} onChange={e=>setinput(e.target.value)}/>
      <MicIcon/>
        </div>
        {!hidebuttons ? (
    <div className='search'>
    <div className='search_button'>
<Button type = 'submit' variant='outlined' onClick={search}>Google Search</Button>
<Button variant='outlined'>I am feeling lucky</Button>
    </div>
</div>
  ):(
    <div className='search'>
    <div className='search_button'>
<Button className='search_buttonhidden' type = 'submit' variant='outlined' onClick={search}>Google Search</Button>
<Button className='search_buttonhidden 'variant='outlined'>I am feeling lucky</Button>
    </div>
</div>
  )
  }
    </form>
  )

}

export default Search