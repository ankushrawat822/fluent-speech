import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/nav/logo-1.png'
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
                <img className='md:ml-4 w-[150px] h-[45px]' src={logo} alt="logo" />
            </div>
            {/* links div */}
            <div className='hidden lg:flex'>
                <ul className='flex items-center justify-center text-[18px] gap-14'>
                    <li className='flex items-center justify-center'><Link className='flex items-center justify-center' to="/"> Home <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></Link></li>
                    <li  className='flex items-center justify-center'><Link className='flex items-center justify-center' ><Link to='/emerging-tehcnologies'>Solutions</Link>  <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></Link></li>
                    <li><Link to="/partner"> Partner Model</Link></li>
                    <li><Link to="/career">Careers</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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