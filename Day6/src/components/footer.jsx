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
  <ul  className="footer-list-top">
    <li>
      <h4 className="footer-list-header">RESERVATIONS</h4></li>
    <li><a className="generic-anchor footer-list-anchor" >Modify/Cancel</a></li>
    <li><a className="generic-anchor footer-list-anchor" >Retrieve Hotel Bill</a></li>
  </ul>
  <div className='line'></div>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">CUSTOMER SERVICE</h4></li>
    <li><a className="generic-anchor footer-list-anchor">Customer Service</a></li>
    <li><a className="generic-anchor footer-list-anchor" style={{cursor:'pointer'}} onClick={contactus}>Contact Us</a></li>
    <li><a className="generic-anchor footer-list-anchor" style={{cursor:'pointer'}} onClick={feedback}>Feedback</a></li>

    </ul>
    <div className='line'></div>
  <ul className="footer-list-top">
    <li id='help'>
      <h4 className="footer-list-header">PLEASE HELP ME</h4></li>
    <li><a className="generic-anchor footer-list-anchor" style={{cursor:'pointer'}} onClick={faq} >FAQs</a></li>
    <li><a className="generic-anchor footer-list-anchor" >For Enquiry</a></li>
    <li><a className="generic-anchor footer-list-anchor">Raise a Complaint</a></li>
  </ul>
  <div className='line'></div>
  <ul className='footer-list-top'>
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
  <li>
  <a className="generic-anchor footer-list-anchor"><CallIcon fontSize='small' className='icon'/>   +91 7895461230  </a>
  </li>
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