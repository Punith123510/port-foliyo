import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import "../Styles/Header.scss"
import { FaReact } from 'react-icons/fa';


const data =[
  {
    label :'Home',
    to :'/'
  },
  {
    label :'About',
    to :'/about'
  },
  {
    label :'Skills',
    to :'/skills'
  },
  {
    label :'Projects',
    to :'/projects'
  },
  {
    label :'servises',
    to :'/services'
  },
  {
    label :'Timeline',
    to :'/timeline'
  },
  {
    label :'Testimonials',
    to :'/testimonials'
  },
  {
    label :'Contact',
    to :'/contact'
  },
]


const Header = ({ socialHandles }) => {
const [toggleIcon, setToggleIcon]=useState(false)
  const handleToggleIcon =()=>{
         setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="navbar">
  {/* Navigation links */}
  <div className='navbar_container'>

    <Link to={'/'} className='navbar_container_logo'>
      <FaReact size={30} />
    </Link>
    </div>
  

<ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
    <li className={'navbar_container_menu_item'}>
      <a href="#" className="navbar_container_menu_item_links" >Home</a>
    </li>
    <li className={'navbar_container_menu_item'}>
      <a href="#about" className="navbar_container_menu_item_links">About</a>
    </li>
    <li className={'navbar_container_menu_item'}>
      <a href="#skills" className="navbar_container_menu_item_links">Skills</a>
    </li>
    <li className={'navbar_container_menu_item'}>
      <a href="#projects" className="navbar_container_menu_item_links">Projects</a>
    </li>
    <li className={'navbar_container_menu_item'}>
      <a href="#services" className="navbar_container_menu_item_links">Services</a>
    </li>
    <li className={'navbar_container_menu_item'}>
      <a href="#timeline" className="navbar_container_menu_item_links">Timeline</a>
    </li>
    <li className={'navbar_container_menu_item'}>
      <a href="#testimonials" className="navbar_container_menu_item_links">Testimonials</a>
    </li>
    <li className={'navbar_container_menu_item'}>
      <a href="#contact" className="navbar_container_menu_item_links">Contact</a>
    </li>
  </ul>

  <div className='nav-icon' onClick={handleToggleIcon}>
    {toggleIcon ? <HiX size={30}/> : <FaBars size={30} />}
  </div>
  
  <div className="flex items-center mt-4">
    {/* Social media icons 
    {socialHandles?.map((handle) => (
      <a key={handle._id} href={handle.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 mr-4">
        <img src={handle.image.url} alt={handle.platform} className="w-6 h-6" />
      </a>
    ))}*/}
  </div>
</nav>

    </div>
  );
};

export default Header;
