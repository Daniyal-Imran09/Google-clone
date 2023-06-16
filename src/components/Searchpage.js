import React from 'react'
import './Searchpage.css'
import { useStateValue } from '../Stateprovider'
import  useGoogleSearch from '../components/usegooglesearch'
import Response from './Response'
import { Link } from 'react-router-dom'
import logo from "../images/google-ar21.svg"
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Searchpage() {
    const[{term},dispatch]=useStateValue();
const {data }= useGoogleSearch(term);

//const data = Response;
console.log(data)
  return (
    <div className='searchpage'>
<div className='searchpage_header'>
  <Link to="/">
    <img src={logo} alt=""/>
  </Link>

<div className='searchpage_headerbody'>
    <Search hidebuttons/>
    <div className='searchpage_options'>
  <div className='searchpage_optionsleft'>
   <div className='searchpage_option'>
    <SearchIcon/>
    <Link to = "/All">All</Link>
   </div>
   <div className='searchpage_option'>
    <DescriptionIcon/>
    <Link to="/News">News</Link>
 </div>
 <div className='searchpage_option'>
 <ImageIcon/>
    <Link to="/images">images</Link>
  </div>
  <div className='searchpage_option'>
  <ShoppingBagIcon/>
    <Link to="/shopping">Shopping</Link>
  </div>
  <div className='searchpage_option'>
  <LocationOnIcon/>
    <Link to="/maps">maps</Link>
  </div>
  <div className='searchpage_option'>
  <MoreVertIcon/>
    <Link to="/more">more</Link>
  </div>

  </div>
  <div className='searchpage_optionsright'>
  <div className='searchpage_option'>
    <Link to="/setttings">settings</Link>
  </div>

  <div className='searchpage_option'>
    <Link to="/Tools">Tools</Link>
  </div>
  </div>
    </div>
 </div>
 </div>
{term && (
 <div className='searchpage_results'>
<p className='searchpageicon_resulticon'>
  About {data?.searchInformation.formattedTotalResults} results {data?.searchInformation.formattedSearchTime} for {term}
</p>

{data?.items.map((item) => {
  return (
    <div className='searchpage_result'>
      <a className='searchpage_resultlink'  href={item.link}>
        {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src &&
          (<img className='searchpage_resultimg'
          src={item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src} alt=""
          />)
        }
      {item.displayLink}
      <span className="carrot-sign">&#9660;</span>
      </a>
      <a className='searchpage_resulttitle' href ={item.link}>
        <h2>{item.title}</h2>
      </a>
      <p className='searchpage_resultsnippet'>
        {item.snippet}
      </p>
     
    </div>
  );
})}

 </div>
)}

    </div>
 
  )
}

export default Searchpage