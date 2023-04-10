import React , {useState} from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/nav/logo-1.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { VscGlobe } from 'react-icons/vsc'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'

const Navbar = () => {

    // states for drop down menus
   const [showHomeMenu , setShowHomeMenu] = useState(false)
   const [showSolutionMenu , setShowSolutionMenu] = useState(false)


   // states for hamburder menu
   const [menuIcon , setMenuIcon] = useState(false)

   //    state to show mabile nav links
 const [ShowMobileNavDiv, setShowMobileNavDiv] = useState(false)

//  state for showing home menu links
const [showHomeMenuLinks , setShowHomeMenuLinks] = useState(false)

//  state for showing home menu links
const [showSolutionMenuLinks , setShowSolutionMenuLinks] = useState(false)

   const handleCrossIcon = ()=>{
      setMenuIcon(false)
      setShowMobileNavDiv(false)
   }



   const handleHamburgerIcon = ()=>{
    setMenuIcon(true)
    setShowMobileNavDiv(true)
 }
    return (
        <>


            {/* // main div starts */}
            <div className='relative flex justify-between px-4 items-center lg:justify-start  gap-x-20'>
                {/* logo div */}
                <div>
                  <Link to='/'> <img className='md:ml-4 w-[150px] h-[45px] my-3 lg:my-0' src={logo} alt="logo" /></Link> 
                </div>
                {/* links div */}
                <div className='hidden lg:flex '>
                    <ul className='flex items-center justify-center text-[18px] gap-x-14'>
                        <li onMouseEnter={()=> setShowHomeMenu(true)} onMouseLeave={()=> setShowHomeMenu(false)} className='flex items-center justify-center h-[93px]'><Link className='flex items-center justify-center' to="/"> Home <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></Link>
                         {/* home drop down menues start */}
                       { showHomeMenu && <div onMouseEnter={()=> setShowHomeMenu(true)} className=' absolute top-[90px] bg-white '>
                            <ul className=' flex flex-col items-center justify-center gap-2 p-4 emerging-tech-white-div-drop-shadow text-[18px]'>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'>Driver</li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'>Talk</li>
                                <li className='px-2 py-1 rounded-[6px] hover:w-full hover:text-center cursor-pointer hover:bg-[#E8E8E8]'>About Us</li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'>OUr Partial Client</li>
                            </ul>
                        </div> }
                          {/* home drop down menues ends */}
                          </li>


                       


                        <li onMouseEnter={()=> setShowSolutionMenu(true)} onMouseLeave={()=> setShowSolutionMenu(false)} className='flex items-center justify-center  h-[93px]'>Solutions  <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown> {/* home drop down menues start */}
                       { showSolutionMenu && <div onMouseEnter={()=> setShowSolutionMenu(true)} className=' absolute top-[90px] bg-white '>
                            <ul className=' flex flex-col items-center justify-center gap-2 p-4 emerging-tech-white-div-drop-shadow text-[18px]'>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/emerging-tehcnologies'>Emerging Technologies</Link></li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/virtual-and-agumented-reality'>Virtual & Agumented Reality</Link></li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/custom-application'>Custom Application</Link></li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/enterprise-application'>Enterprise Application</Link></li> 
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/business-intelligence'>Business Intelligence</Link></li> 
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]'><Link to='/infrastructure'>Infrastructure</Link></li> 
                               
                            </ul>
                        </div> }
                          {/* home drop down menues ends */}</li>
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
                   {menuIcon ? ( <RxCross2 onClick={handleCrossIcon} className='text-[27px] font-bold'></RxCross2>) : <GiHamburgerMenu onClick={handleHamburgerIcon} className='text-[27px] font-bold'></GiHamburgerMenu> } 
                </div>
            </div>



           {/* mobile links   */}
         { 
            ShowMobileNavDiv && 
            <div className=' absolute top-[68px]  w-full bg-white '>
                <ul>
                    <li onClick={(prev)=>setShowHomeMenuLinks((prev)=> !prev)} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'>Home <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></li>
                    {
                        showHomeMenuLinks && 
                        <div>
                            <ul className='text-[19px] sm:text-[20px]'>
                            <li className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'>Driver</li>
                                <li className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'>Talk</li>
                                <li className='px-2 py-1 rounded-[6px] w-full text-center cursor-pointer hover:bg-[#E8E8E8]'>About Us</li>
                            </ul>
                        </div>
                    }
                </ul>
                <ul>
                    <li onClick={(prev)=>setShowSolutionMenuLinks((prev)=> !prev)} className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'>Solutions <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown></li>
                    {
                        showSolutionMenuLinks && 
                        <div>
                            <ul className='text-[19px] sm:text-[20px]'>
                            <li className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/emerging-tehcnologies'>Emerging Technologies</Link></li>

                            <li className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/virtual-and-agumented-reality'>Virtual & Agumented Reality</Link></li>
                            <li className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/custom-application'>Custom Application</Link></li>
                            <li className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/enterprise-application'>Enterprise Application</Link></li>
                            <li  className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/business-intelligence'>Business Intelligence</Link></li>
                            <li className='cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]'><Link to='/infrastructure'>Infrastructure</Link></li> 
                         
                            </ul>
                        </div>
                    }
                </ul>

                <ul>
                    <li className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'>Partner Model </li> 
                    <li className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'> Careers </li>
                    <li className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'> <Link to='/contact'>Contact Us</Link> </li>
                    <li className='flex items-center justify-center text-[22px] sm:text-[24px] p-2'>
                     {/* search and language div */}
                <div className='flex  items-center justify-center gap-1'>
                    <AiOutlineSearch className='text-[20px] '></AiOutlineSearch>
                    <p className='text-[18px]'>English/Other language</p>
                    <VscGlobe className='text-[24px] font-bold mt-2'></VscGlobe>
                </div>

                
 </li>  

                </ul>
                
            </div>
         }  


        </>
    )
}

export default Navbar