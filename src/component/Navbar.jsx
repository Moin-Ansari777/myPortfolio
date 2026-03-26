import React from 'react'
import Layout from './Layout'
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
    return (
       
            <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-lg px-4 lg:px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-2xl font-bold">
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About</a></li>
                            <li><a href='#skill'>Skills</a></li>
                            <li><a href='#project'>Project</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    {/* Enhanced Logo */}
                    <a className="btn btn-ghost text-2xl bg-orange-600 hover:bg-orange-700 text-white font-black rounded-lg px-4">
                        OK
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 px-1">
                        {['home', 'about', 'skill', 'project', 'contact'].map((item) => (
                            <li key={item}>
                                <a 
                                    href={`#${item}`} 
                                    className="capitalize text-lg font-bold transition-all duration-300 hover:bg-orange-600 hover:text-white hover:scale-110 active:scale-95"
                                >
                                    {item === 'skill' ? 'Skills' : item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end">
                    <a 
                        href='#contact'
                        className="btn bg-orange-600 hover:bg-orange-700 text-white border-none shadow-md transition-transform hover:scale-105"
                    >
                        <IoMdContact className='text-2xl'/> 
                        <span className="hidden sm:inline">Contact Me</span>
                    </a>
                </div>
            </div>
       
    )
}

export default Navbar
