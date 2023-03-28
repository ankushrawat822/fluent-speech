import React from 'react'

import mainSectionArrow from '../../images/home/main-arrow.svg'
import homeHeroRobot from '../../images/home/home-hero-robot.png'
const Home = () => {
  return (
  <>
  {/* black div bg */}
    <main className='bg-black w-screen h-[90dvh] home-hero-robot-bg'>
      {/* innovation div */}
      <div className=' flex flex-col text-white min-w-[400px]'>
        <p>INNOVATION</p>
        <p className='flex'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.</p>
       {/* <img src={mainSectionArrow} alt="" /> */}
       <button className='flex items-center justify-center home-hero-know-btn'>Know More</button>
      </div>
    </main>

    <section className='w-screen h-screen'>

    </section>
  </>
  )
}

export default Home