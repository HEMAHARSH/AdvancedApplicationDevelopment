import React from 'react'
import keychain from '../../assets/others/keychain'
import Navbar from '../../components/navbar'
import "../../assets/css/hamper.css"
import { useNavigate } from 'react-router-dom';

function Keychain() {
  const nav=useNavigate('');
  const customize = (id) => {
    console.log(id);
    nav(`/product/${id}`);
  };
  return (
    <div>
    <div id="navbarc">
    <Navbar/></div>
    <p id="textrrk">PERSONALISED KEY CHAINS</p>
    <div className="items-containerr">
    {keychain.map((keychain, index) => (
      <div key={index} onClick={() => customize(keychain.id)} className="itemr">
        {keychain.imgs && keychain.imgs.length > 0 && (
          <img id="imagehomer" src={keychain.imgs[0]} alt="..." />
        )}
        <ul id="listcartr">
          <li>{keychain.title}</li>
          <li>&#x20B9;{keychain.price}</li>
          <button id="cbuttonr">Book now</button>
          <p id="usersnor">{keychain.users}</p>
        </ul>
      </div>
    ))}
  </div>
    </div>
  )
}

export default Keychain