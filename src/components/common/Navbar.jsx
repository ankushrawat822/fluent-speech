import React from 'react'

import logo from '../../images/nav/logo.svg'
import {AiOutlineSearch} from 'react-icons/ai'
import {VscGlobe} from 'react-icons/vsc'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
    return (
        <>

      
        {/* // main div starts */}
        <div className=' flex justify-between px-4 items-center lg:justify-start py-3 lg:py-6 gap-20'>
            {/* logo div */}
            <div>
                <img className='md:ml-4' src={logo} alt="logo" />
            </div>
            {/* links div */}
            <div className='hidden lg:flex'>
                <ul className='flex items-center justify-center text-[18px] gap-14'>
                    <li className='flex items-center justify-center'>Home  <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></li>
                    <li  className='flex items-center justify-center'>Solutions <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></li>
                    <li>Partner Model</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            {/* search and language div */}
            <div className='hidden xl:flex ml-10 items-center justify-center gap-1'>
            <AiOutlineSearch className='text-[20px] '></AiOutlineSearch>
                <p>English/Other language</p>
                <VscGlobe className='text-[23px] font-bold'></VscGlobe>
            </div>

            <VscGlobe className='text-[23px] font-bold hidden lg:flex xl:hidden'></VscGlobe>


            {/* mobile responsive  */}
            <div className='lg:hidden'>
        <GiHamburgerMenu className='text-[27px] font-bold'></GiHamburgerMenu>
            </div>
        </div>


        </>
    )
}

export default Navbar