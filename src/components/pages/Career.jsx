import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { HiArrowRight } from 'react-icons/hi'
import videoImg from '../../images/careers/video.svg'
import sliderBluevector from '../../images/careers/slider-blue-vector.svg'
import sliderTopImg from '../../images/careers/slider-top-img.svg'

import Slider from "react-slick";


import twIcon from '../../images/solution/custom-app/tw.svg'
import instaIcon from '../../images/solution/custom-app/insta.svg'
import inIcon from '../../images/solution/custom-app/in.svg'

import { Link } from "react-router-dom";


const Career = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 692,
        settings: {
          slidesToShow: 1,
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
      <div data-aos="fade-up" >
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[54dvh] careers-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[72px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>Achieve Highest with us
          </h1>



        </div>
      </div>


      {/* Ready to make impact? */}
      <div data-aos="zoom-in" className='mt-9'>
        <p className='text-[25px] sm:text-[30px] md:text-[36px] text-center text-[#023267]  font-semibold  '>Ready to make impact?</p>

        <p className='mt-3 text-[18px] leading-[25px] text-center px-3 sm:px-5 md:px-10 lg:px-20 xl:px-64 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit amet molestie viverra, </p>

        {/* text and video div */}
        <div className=' px-3 flex flex-col items-center justify-center text-center md:flex-row  md:items-center md:justify-center mt-16 gap-5'>
          {/* text content */}
          <div className='flex flex-col items-start justify-center gap-4  sm:gap-10 md:gap-12 lg:gap-20 md:w-[50%] xl:w-[40%]'>
            {/* text group 1 */}
            <div className='flex  flex-col items-center md:items-start justify-center w-full '>
              <p className='text-[18px] sm:text-[20px] text-[#17519BFC] font-semibold  text-center md:text-start mb-2'>Ready to make impact?</p>
              <p className='text-[16px] text-center md:text-start leading-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. </p>
            </div>


            {/* text group 2 */}
            <div className='flex  flex-col items-center md:items-start justify-center w-full '>
              <p className='text-[18px] sm:text-[20px] text-[#17519BFC] font-semibold  text-center md:text-start mb-2'>Ready to make impact?</p>
              <p className='text-[16px] text-center md:text-start leading-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. </p>
            </div>

            {/* text group 3 */}
            <div className='flex  flex-col items-center md:items-start justify-center w-full '>
              <p className='text-[18px] sm:text-[20px] text-[#17519BFC] font-semibold  text-center md:text-start mb-2'>Ready to make impact?</p>
              <p className='text-[16px] text-center md:text-start leading-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. </p>
            </div>

          </div>

          {/* video content */}
          <img className='md:w-[300px] lg:w-[400px] xl:w-auto' src={videoImg} alt="" />
        </div>


      </div>

      {/* current openings  */}
      <div data-aos="fade-up" className='mt-10 flex flex-col items-center justify-center px-3 '>
        <p className='text-[24px] sm:text-[30px] md:text-[36px] text-center text-[#023267]  ' >Current Openings</p>

        {/* view all div  */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 px-3 sm:px-5 md:px-10 lg:px-20 xl:px-44'>
          <p className='text-[18px] sm:text-[20px] text-start leading-[27px] mt-7 md:w-[70%] lg:w-[85%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit amet molestie viverra, </p>

        <Link to='/career-open-job'><button className='text-[18px] text-white font-semibold flex
            items-center justify-center gap-2 py-2 px-4 bg-[#023267] rounded-[10px] '>View all  <HiArrowRight></HiArrowRight> 
            </button> </Link>  
        </div>

      </div>

      {/* slider */}


      {/* slider  */}
      <div data-aos="fade-up" className=' flex items-center justify-center my-[44px]'>
        <Slider className='slider-outter-bus w-[80vw] md:w-[85vw] xl:w-[75dvw]  ' {...settings}>


          {/* card div 1*/}
          <div className='relative  ml-11 h-[370px]'>
            <img className='absoute top-0 left-0' src={sliderBluevector} alt="" />
            {/* upper img and text div */}
            <div className='absolute z-10 top-0 left-3'>
              <img className='' src={sliderTopImg} alt="" />
              {/* text div */}
              <div className='ml-2 z-20 flex flex-col items-start justify-center gap-2 p-3 bg-[#98989849]  '>
                <p className=' text-[18px] font-bold'>Architectural technologist</p>
                <p className='text-[15px] text-start leading-[14px] w-[260px] mb-3'>Bring your talents to the forefront of business and technology and go as far as your ambition takes you.</p>

                <p className='flex items-center justify-center text-[#17519B] text-[18px] font-semibold gap-2'>LEARN MORE  <HiArrowRight></HiArrowRight> </p>
              </div>
            </div>

          </div>




          {/* card div 1*/}
          <div className='relative  ml-11 h-[370px]'>
            <img className='absoute top-0 left-0' src={sliderBluevector} alt="" />
            {/* upper img and text div */}
            <div className='absolute z-10 top-0 left-3'>
              <img className='' src={sliderTopImg} alt="" />
              {/* text div */}
              <div className='ml-2 z-20 flex flex-col items-start justify-center gap-2 p-3 bg-[#98989849]  '>
                <p className=' text-[18px] font-bold'>Architectural technologist</p>
                <p className='text-[15px] text-start leading-[14px] w-[260px] mb-3'>Bring your talents to the forefront of business and technology and go as far as your ambition takes you.</p>

                <p className='flex items-center justify-center text-[#17519B] text-[18px] font-semibold gap-2'>LEARN MORE  <HiArrowRight></HiArrowRight> </p>
              </div>
            </div>

          </div>



          {/* card div 1*/}
          <div className='relative  ml-11 h-[370px]'>
            <img className='absoute top-0 left-0' src={sliderBluevector} alt="" />
            {/* upper img and text div */}
            <div className='absolute z-10 top-0 left-3'>
              <img className='' src={sliderTopImg} alt="" />
              {/* text div */}
              <div className='ml-2 z-20 flex flex-col items-start justify-center gap-2 p-3 bg-[#98989849]  '>
                <p className=' text-[18px] font-bold'>Architectural technologist</p>
                <p className='text-[15px] text-start leading-[14px] w-[260px] mb-3'>Bring your talents to the forefront of business and technology and go as far as your ambition takes you.</p>

                <p className='flex items-center justify-center text-[#17519B] text-[18px] font-semibold gap-2'>LEARN MORE  <HiArrowRight></HiArrowRight> </p>
              </div>
            </div>

          </div>




          {/* card div 1*/}
          <div className='relative  ml-11 h-[370px]'>
            <img className='absoute top-0 left-0' src={sliderBluevector} alt="" />
            {/* upper img and text div */}
            <div className='absolute z-10 top-0 left-3'>
              <img className='' src={sliderTopImg} alt="" />
              {/* text div */}
              <div className='ml-2 z-20 flex flex-col items-start justify-center gap-2 p-3 bg-[#98989849]  '>
                <p className=' text-[18px] font-bold'>Architectural technologist</p>
                <p className='text-[15px] text-start leading-[14px] w-[260px] mb-3'>Bring your talents to the forefront of business and technology and go as far as your ambition takes you.</p>

                <p className='flex items-center justify-center text-[#17519B] text-[18px] font-semibold gap-2'>LEARN MORE  <HiArrowRight></HiArrowRight> </p>
              </div>
            </div>

          </div>


        </Slider>
      </div>


      {/* Take a snapshot of daily life at Agile Global  */}

      <div data-aos="fade-up" className='mt-16 px-3 sm:px-7 md:px-10 lg:px-20 xl:px-44'>
        <p className='text-[24px] sm:text-[30px] md:text-[32px] leading-[44px] text-[#17519B] text-center font-semibold mt- '>Take a snapshot of daily life at Agile Global</p>

        <p className='text-[20px] text-center leading-[27px]   mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit amet molestie viverra, </p>
      </div>


      {/* slider div starts  */}




      {/* slider div ends  */}



      {/* Perks and Benefits */}
      <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-32'>
        <p className='text-[24px] sm:text-[30px] md:text-[32px] text-center leading-[44px] '>Perks and Benefits</p>

        {/* hr line */}
        <div className='line w-[85vw] md:w-[80vw] lg:w-[70vw] xl:w-[70vw] bg-black h-[2px] mt-3 mb-12 ' ></div>

        {/* nos div starts */}
        <div className='flex flex-col items-center justify-center ml-3 px-2 gap-3 md:flex-row md:gap-5 md:justify-between md:w-[80vw] lg:w-[70vw] xl:w-[70vw]'>


          {/* no from 1 to 5 */}
          <div className='flex flex-col items-center justify-center gap-3'>
            {/* no 1 */}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>1. Healthcare Insurance</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>

            {/* no 2 */}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>2. Vacation / Paid Time Off</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 3 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>3. Performance Bonus</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 4 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>4. Paid Sick Days</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>



             {/* no 5 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>5. 401(K) Plan, Retirement Plan and/or Pension</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>





          </div>





             {/* no from 6 to 10 */}
             <div className='flex flex-col items-center justify-center gap-3'>
            {/* no 6*/}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>6. Flexible Schedule (WFH/WFO)</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>

            {/* no 7 */}
            <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>7. Office Perks</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 8 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>8. Employee Development Plans</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>


             {/* no 9*/}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>9. Tuition Reimbursement</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>



             {/* no 10 */}
             <div className='flex items-start justify-center gap-1 flex-col'>
              <p className='text-[16px] text-[#17519B] text-start md:text-[18px] '>10. Employee Discounts</p>
              <p className='ml-4 text-[14px] leading-[17px] md:text-[16px]'>40% of employees across the globe say that they value health insurance more than a pay raise as one of the top employee.</p>
            </div>





          </div>


          


        </div>




      </div>


       {/* see what we have.... */}
       <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-16'>
                <p className='text-[24px] font-semibold text-center'>See what we have been recently</p>
                 {/* hr line */}
                 <div className='line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-3 mb-6 ' ></div>

                 {/* social media icons */}
                 <div className='flex items-center justify-center gap-2'>
                    <img src={inIcon} alt="" />
                    <img src={instaIcon} alt="" />
                    <img src={twIcon} alt="" />
                 </div>
            </div>



       


    </>
  )
}

export default Career