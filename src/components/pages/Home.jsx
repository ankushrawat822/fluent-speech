import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import mainSectionArrow from '../../images/home/main-arrow.svg'
import homeHeroArrow from '../../images/home/home-hero-arrow-1.jpg'

// solutiong img
import homeSolImg1 from '../../images/home/home-sol-img-3-p.png'
import homeSolImgTest from '../../images/home/EG3.png'

// recognition img
import homeRecoDate from '../../images/home/home-reco-date.png'
import homeReco2 from '../../images/home/home-reco-2.png'


// client img
import homeClient3 from '../../images/home/home-client-3.svg'

// client says 
import homeQuotStart from '../../images/home/home-quote-start.svg'
import homeQuotEnd from '../../images/home/home-quote-end.svg'
import homeUserIcon from '../../images/home/home-user-icon.svg'

const logos = [

  { image: homeClient3  },
  { image:homeClient3 },
  { image: homeClient3 },
  { image: homeClient3 },
]

const Home = () => {

  const options = {
    loop:true,
    
    center: true,
    items: 4,
    margin: 30,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
};
  return (
    <>
      {/* black div bg */}
      <main className='bg-black w-screen h-[90dvh] home-hero-robot-bg'>
        {/* innovation div */}
        <div className=' p-3 sm:p-10 lg:mx-20 xl:mx-40  lg:pt-14  flex flex-col text-white sm:max-w-[500px] lg:max-w-[650px] 
      md:max-w-[600px]  items-start justify-start'>
          <p className='text-[34px] md:text-[56px]  font-bold leading-[78px]'>INNOVATION</p>
          <p className='flex text-[18px] leading-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.</p>
          <img className='w-[156px] h-[122px] py-2 sm:py-3 md:w-[219px] md:h-[137px] lg:ml-5 lg:h-[150px] lg:w-[229px]' src={homeHeroArrow} alt="" />
          {/* know more button div */}
          <div className=' w-full flex items-center justify-center'>
            <button className='flex items-center justify-center home-hero-know-btn font-bold text-[24px] px-5 py-2 md:px-8 md:py-4 lg:px-14 '>Know More</button>
          </div>

        </div>
      </main>

      <section className='  px-3 md:px-10 lg:px-28'>
        {/* agile global solution 4 card div */}
        <div className='flex flex-col items-center justify-center mt-10 md:mt-16 lg:my-24'>
          <h2 className='text-[24px] md:text-[36px] leading-[43px] text-center'>AGILE GLOBAL SOLUTIONS, INC</h2>
          <p className='text-center text-[18px] md:text-[24px] leading-[32px] mt-5 md:mt-10 lg:mt-14'>
            Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.</p>
        </div>

        {/* four cards div */}
        <div className='flex items-center justify-center flex-wrap gap-5 md:gap-10 mt-5 md:mt-10 '>
          {/* card 1 */}
          <div className=' relative rounded-[8px]   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
            <img className='w-full h-full rounded-[8px] home-sol-card-1' src={homeSolImgTest} alt="" />
            {/* text div */}
            <div className='mx-3 absolute bottom-0'>
              <p className='text-[24px] mt-[30px]'>Global Best</p>
              <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p className='text-[16px]'>Read more</p>
            </div>

          </div>
          {/* card 2 */}
          <div className=' relative rounded-[8px]   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
            <img className='w-full h-full rounded-[8px] home-sol-card-1' src={homeSolImgTest} alt="" />
            {/* text div */}
            <div className='mx-3 absolute bottom-0'>
              <p className='text-[24px] mt-[30px]'>Global Best</p>
              <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p className='text-[16px]'>Read more</p>
            </div>

          </div>
          {/* card 3 */}
          <div className=' relative rounded-[8px]   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
            <img className='w-full h-full rounded-[8px] home-sol-card-1' src={homeSolImgTest} alt="" />
            {/* text div */}
            <div className='mx-3 absolute bottom-0'>
              <p className='text-[24px] mt-[30px]'>Global Best</p>
              <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p className='text-[16px]'>Read more</p>
            </div>

          </div>
          {/* card 4 */}
          <div className=' relative rounded-[8px]   w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white'>
            <img className='w-full h-full rounded-[8px] home-sol-card-1' src={homeSolImgTest} alt="" />
            {/* text div */}
            <div className=' mx-3 absolute bottom-0'>
              <p className='text-[24px] mt-[30px]'>Global Best</p>
              <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <p className='text-[16px]'>Read more</p>
            </div>

          </div>
        </div>


        {/* our recognition and awards..... */}
        <div className='flex flex-col items-center justify-center my-20 md:my-14 lg:my-24'>
          <p className='text-[24px] md:text-[36px] lg:text-[46px] text-center font-bold mb-10 md:mb-20'>OUR RECOGNITION & AWARDS</p>
          {/* content divs starts*/}
          {/* first starts */}
          <div className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 '>

            <img className='md:w-[336px] lg:w-[410px] xl:w-[500px]' src={homeRecoDate} alt="" />

            <div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
              <h3 className='text-[28px] md:text-[36px] font-bold my-6'>Set your schedule</h3>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'>Take complete control over available hours and services</p>
              <p className='text-[#7D7987] text-[18px] leading-[30px] my-2'>Accept or reject new clients at your convenience
                Manage schedule with built in task management tools </p>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'>
                Manage your schedule using any device</p>
            </div>

          </div>
          {/* first ends */}
          <br />
          <br />
          {/* second starts */}
          <div className=' flex flex-col md:flex-row-reverse items-center justify-center gap-5 md:gap-10 lg:gap-20 '>

            <img className='md:w-[336px] lg:w-[410px] xl:w-[500px]' src={homeReco2} alt="" />

            <div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
              <h3 className='text-[28px] md:text-[36px] font-bold my-6'>Manage Documents</h3>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'>Manage your forms, plans, and evaluations with our customizable library</p>
              <p className='text-[#7D7987] text-[18px] leading-[30px] my-2'>Manage progress notes with the click of a button from any device </p>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'>
              Create your own evaluations or use built in templates for your clients</p>
            </div>

          </div>
          {/* second ends */}
          <br />
          <br />
          {/* third starts */}
          <div className=' flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 '>

            <img className='md:w-[336px] lg:w-[410px] xl:w-[500px]' src={homeRecoDate} alt="" />

            <div className=' flex flex-col items-center justify-center text-center md:text-start md:items-start md:justify-start lg:w-[46%]'>
              <h3 className='text-[28px] md:text-[36px] font-bold my-6'>Manage Billing</h3>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'>Save time, prevent disputes and stop chasing payments with automatic subscriptions</p>
              <p className='text-[#7D7987] text-[18px] leading-[30px] my-2'>Use integrated credit card processing and keep your clients safe with bank level security </p>
              <p className='text-[#7D7987] text-[18px] leading-[30px]'>
              Allow clients to setup auto billing from their client portal</p>
            </div>

          </div>
          {/* third ends */}
        </div>





      </section>

      <section className='  mt-20 flex flex-col items-center justify-center p-3 '>
      {/* title */}
           <h2 className='text-[28px] md:text-[48px] font-bold my-4'>OUR PARTIAL CLIENT LIST</h2>
           {/* hr line */}
           <div className='line w-[85vw] md:w-[70vw] lg:w-[40vw] bg-black h-[2px] my-3 ' ></div>

           <p className='text-[18px] md:text-[24px] text-center my-2 mb-10 leading-[25px] w-full md:w-[80vw] lg:w-[70vw]'>AGILE GLOBAL has assisted numerous Fortune/Global 1000 and mid-sized firms in their application development, integration, conversion, consolidation and support efforts. We are also dedicated to partnering with early stage and emerging growth enterprise software companies, working with them to bring to market the best technology solutions possible.</p>

        {/* owlcarousel  */}
        <OwlCarousel className="owl-carousel lg:w-[70vw]"  {...options}>
         { 
          <div className=' flex items-center justify-center gap-6 my-5 '>
          
           {  logos.map((item)=>( 
              <img className='w-[350px] h-[115px]' src={item.image} alt="" />
            ))
           }
           </div> 
           }
        </OwlCarousel>

{/* what clients say about us section */}
   <div className='flex flex-col items-center justify-center  mt-[50px]'>
    <p className='text-[24px] md:text-[32px] font-bold'>What Clients say About us</p>
    <p className='text-center w-[70vw] md:w-[25vw] text-[16px] leading-[20px] mb-[30px]'>Everything you need to know about offering a differentiated customer experience</p>
    {/* quate div */}
    <div className='  flex relative items-center justify-center py-10 md:py-2  md:w-[55vw]'>
      <img className='absolute top-0 left-0 w-[46px] h-[52px]' src={homeQuotStart} alt="" />
      <p className='text-[18px] text-center w-[90vw]  md:w-[50vw] p-3 md:p-5'>Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global Business and IT solutions provider headquartered in Folsom, CA (a suburb of Sacramento) servicing prestigious clients all over the world.</p>
      <img className='absolute bottom-0 right-0 w-[46px] h-[52px]' src={homeQuotEnd} alt="" />
     
    </div>
     {/* user name and image */}
     <div className='flex flex-col items-center justify-center gap-1'>
           <img className='w-[40px] h-[40px]' src={homeUserIcon} alt="" />
           <p className='text-[18px] font-bold '>Jason Roy</p>
      </div>
   </div>
      </section>


      {/* another section */}
      
    </>
  )
}

export default Home