import React from 'react'
import { navLinks } from './data'
import {headerLogo} from "../assets/images"
import{hamburger}from "../assets/icons"
const Nav = () =>{
  return <header className="padding-x py-8 absolute z-10 w-full">
<nav className="flex justify-between item center max-container ">
  <a href="/">
  <img src={headerLogo}
  alt='Logo'
  width={130}
  height={29}></img>
  </a>
  <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
    {navLinks.map((links)=>(<li key={links.label}><a href={links.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{links.label}</a></li>))}
  </ul>
  <div className="hidden max-lg:block "><img src={hamburger} alt='hamburger'
  width={25}
  height={25}/></div>
</nav>
  </header>
}

export default Nav
