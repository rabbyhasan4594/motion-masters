import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-600 text-base-content">
  <div>
    <img className='w-1/3' src="https://i.ibb.co/0rth3sH/motion-masters-logo.png" alt="" />
    <p className='text-white'>Toy Galaxy Ltd.<br/>Providing best toy car since 2020.
    <br />Copyright © 2023 Toy Galaxy. All rights reserved.</p>
  </div> 
  <div className='text-white'>
    <span className=" font-bold">Class-category</span> 
    <span className="">Ballet</span> 
    <span className="">Tap</span> 
    <span className="">Salsa</span> 
    <span className="">Hip-Hop</span> 
    <span className="">Jazz</span> 
    
  </div> 
  <div className='text-white'>
    <span className=" font-bold text-center">About</span>
    <span className="">Phone:0174000000</span> 
    <span className="">Email:rabby@gmail.com</span>  
 
  </div> 
  
</footer>
        </div>
    );
};

export default Footer;