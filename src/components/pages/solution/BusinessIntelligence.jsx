import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";

const BusinessIntelligence = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]



  };
  return (
    <>
      <div>
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] business-intelligence-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>BUSINESS INTELLIGENCE & EAI
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Understanding relevant data allows organizations make the right decision for their employees, shareholders and customers. Our SMEs specialize in Big Data, Analytics, Data Mining, Data warehousing, Dashboard creation as well as integration of disparate Enterprise applications that do not understand each other.</p>


        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-5 my-10'>
        <p className='text-[36px] font-semibold leading-[39px] text-ce ter'>BUSINESS INTELLIGENCE</p>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mt-9 px-3'>
          <p className='text-center text-[20px] lg:text-start lg:w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit amet molestie viverra, </p>
          <button className='text-white flex items-center justify-center bg-[#023267] rounded-[10px] gap-2 px-[40px] py-[10px]'>View all <IoIosArrowForward></IoIosArrowForward> </button>
        </div>
      </div>



      {/* slider  */}
      <div className=' flex items-center justify-center my-[44px]'>
        <Slider className='slider-outter  w-[85vw] ' {...settings}>
         
           <div className='bb business-card-img-1 rounded-[13px] w-[300px] h-[210px]'>
           
           </div> 

           <div className='bb business-card-img-1 rounded-[13px] w-[300px] h-[210px]'>
           
           </div> 

           <div className='bb business-card-img-1 w-[200px] h-[210px]'>
           
           </div> 

           <div className='bb business-card-img-1 rounded-[13px] w-[300px] h-[210px]'>
           
           </div> 

           <div className='bb business-card-img-1 rounded-[13px] w-[300px] h-[210px]'>
           
           </div>     
        
        </Slider>
      </div>



    </>
  )
}

export default BusinessIntelligence