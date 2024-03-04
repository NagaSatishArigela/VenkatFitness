import React, { useState } from 'react'
import { navlinks } from '../utils/Data'
import logo from '../assets/logo-white-V2-87x76.png'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-primary py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='cursor-pointer flex'>
                    <img src={logo} alt='Venket Fitness' className='h-24' />
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-primary gap-4 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? '' : 'top-[-490px]'}`}>
                    {
                        navlinks.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 uppercase gap-4' key={link.id}>
                                <a href={link.link} className='font-Poppins text-lg text-gray-800 hover:text-Teal duration-500'>{link.name}</a>
                            </li>))
                    }
                </ul>
                {/* button */}
            </div>
        </div>
    )
}

export default Navbar