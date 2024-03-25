import React from 'react'
import hamper from '../../assets/others/hamper'
import Navbar from '../../components/navbar'
import "../../assets/css/hamper.css"
import { useNavigate } from 'react-router-dom';

function Hamper() {
  const nav=useNavigate('');
  const customize = (id) => {
    console.log(id);
    nav(`/product/${id}`);
  };
  return (
    <div>
    <div id="navbarc">
    <Navbar/></div>
    <p id="textrr">GIFT HAMPERS</p>
    <div className="items-containerr">
    {hamper.map((hamper, index) => (
      <div key={index} onClick={() => customize(hamper.id)} className="itemr">
        {hamper.imgs && hamper.imgs.length > 0 && (
          <img id="imagehomer" src={hamper.imgs[0]} alt="..." />
        )}
        <ul id="listcartr">
          <li>{hamper.title}</li>
          <li>&#x20B9;{hamper.price}</li>
          <button id="cbuttonr">Book now</button>
          <p id="usersnor">{hamper.users}</p>
        </ul>
      </div>
    ))}
  </div>
    </div>
  )
}

export default Hamper