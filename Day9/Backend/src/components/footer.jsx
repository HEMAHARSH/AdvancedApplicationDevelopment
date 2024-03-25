import React from 'react'
import '../assets/css/footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
function Footers() {
  const nav=useNavigate("");
  const tc=()=>{
    nav("/uterms")
  }
  const pp=()=>{
    nav("/uprivacy")
  }
  const faq=()=>{
    nav("/faq")
  }
  const feedback=()=>{
    nav("/feedback")
  }
  const contactus=()=>{
    nav("/contactus")
  }
  return (
    <div className='footer1'>
<footer className="flex-rw">
  
  <ul className='footer-list-top'>
  <li id="header123">
  <h8 className="footer-list-header1">Bulk orders</h8>
  <h8 className="footer-list-header1">Customber review</h8>
  <h8 className="footer-list-header1">Cancellation Policy</h8>
 
  </li>
  <hr/>
  <li id="header123">
  <h8 className="footer-list-header1">About Us</h8>
  <h8 className="footer-list-header1">Data Security</h8>
  <h8 className="footer-list-header1">Corporate orders</h8>
 
  </li>
  <hr/>
  <li id="header123">
  <h8 className="footer-list-header1">FAQ</h8>
  <h8 className="footer-list-header1">Refund Policy</h8>
  <h8 className="footer-list-header1">Corporate orders</h8>
 
  </li>
  <hr/>
  <li>
  <h4 className="footer-list-header" style={{border:"0.1em solid  rgb(213, 60, 119)",backgroundColor:" rgb(213, 60, 119)",borderRadius:"0.3em",padding:"0.2em"}}>CONTACT US</h4>
  </li>
  <li>
  <h4 className="footer-list-header">FOLLOW US ON:</h4></li>
  <li>
  <a href='https://www.facebook.com/' className="generic-anchor footer-list-anchor"><FacebookIcon fontSize='medium'/></a>
  <a href='https://www.instagram.com/' className="generic-anchor footer-list-anchor"><InstagramIcon fontSize='medium'/></a>
  <a href='https://www.linkedin.com/' className="generic-anchor footer-list-anchor"><LinkedInIcon fontSize='medium'/></a>
  <a href='http://www.pinterest.com/' className="generic-anchor footer-list-anchor"><PinterestIcon fontSize='medium'/></a>
  <a href='http://www.youtube.com/' className="generic-anchor footer-list-anchor"><YouTubeIcon fontSize='medium'/></a>
  <a href='http://www.telegram.com/' className="generic-anchor footer-list-anchor"><TelegramIcon fontSize='medium'/></a>
  <a href='http://www.twitter.com/' className="generic-anchor footer-list-anchor"><TwitterIcon fontSize='medium'/></a>
  </li>
  <br/>
  
  <br/>
 
  </ul>
</footer>
<section className='small'>
<span className='pp' style={{cursor:'pointer'}} onClick={pp}>Privacy Policy</span>
<div className='line1'></div>
<span className='tc' onClick={tc}> Terms & Conditions</span>
<div className='line1'></div>
Cookie Center
<div className='line1'></div>
Security & Safety
<div className='line1'></div>
Dont sell Personal Information
<div className='line1'></div>
© 2023 ABC Corporation
</section>
    </div>
  )
}
export default Footers