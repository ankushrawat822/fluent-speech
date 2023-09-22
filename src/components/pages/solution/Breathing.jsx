import React, { useState , useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import ArrowImg from '../../../images/solution/mobile/arrow.svg'
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'
import './breathing-style.css'

const Breathing = () => {

  const [readingTextChange , setReadingTextChange] = useState(0)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  const readingText = ['Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.' , 
  "The most beautiful thing we can experience is the mysterious. It is the source of all true art and science. He to whom the emotion is a stranger, who can no longer pause to wonder and stand wrapped in awe, is as good as dead; his eyes are closed. The insight into the mystery of life, coupled though it be with fear, has also given rise to religion. To know what is impenetrable to us really exists, manifesting itself as the highest wisdom and the most radiant beauty, which our dull faculties can comprehend only in their most primitive forms—this knowledge, this feeling, is at the center of true religiousness. In this sense, and in this sense only, I belong to the ranks of devoutly religious men." , 
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. You may not control all the events that happen to you, but you can decide not to be reduced by them. You alone are enough; you have nothing to prove to anybody. If you don't like something, change it. If you can't change it, change your attitude. Try to be a rainbow in someone's cloud. Nothing will work unless you do. You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot—it's all there. You are the sum of your experiences. You can't change the past, but you can change the way you feel about it. Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently. You can't really know where you are going until you know where you have been." ,
  "You must be the change you wish to see in the world. In a gentle way, you can shake the world. An eye for an eye only ends up making the whole world blind. The best way to find yourself is to lose yourself in the service of others.",
  "It always seems impossible until it's done. Education is the most powerful weapon which you can use to change the world. I am fundamentally an optimist. Whether that comes from nature or nurture, I cannot say. Part of being optimistic is keeping one's head pointed toward the sun, one's feet moving forward." ,
  "Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. Sail away from the safe harbor. Explore. Dream. Discover."




 ]


  return (
    <>
      <div data-aos="flip-down">
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] government-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4 '>Breathing Exercise
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Discover the transformative power of controlled breathing. Our carefully designed breathing exercises will enhance your speech clarity and boost confidence.</p>

        </div>
      </div>

      {/* breathing starts */}

   {/* blue div */}
      {/* box 2 */}
      <div className='flex items-center justify-center mt-14'>
        <div className='emerging-tech-white-div-drop-shadow bg-[#023267] flex w-full flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] text-white'>
          <p className='text-[22px] sm:text-[23px] text-center sm:text-start '>This exercise enhances speech fluency by promoting controlled breathing, aiding in clear and confident articulation. To perform this exercise - Engage with the animation by synchronizing your breath with the expanding and shrinking circle. Inhale deeply during expansion and speak as the circle shrinks. This rhythmic practice fosters breath control and enhances your speech clarity.</p>

        </div>
      </div>

    


       {/* breathing starts */}






      {/* Agile Global’s Mobile Business Solutions
 */}
      <div data-aos="fade-down" className='my-7'>
        <p className='mb-6 text-[22px] sm:text-[36px] font-semibold text-center text-[#17519BFC] my-24'>Start Breathing Exercise
        </p>
        {/*  para and image div  */}
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-evenly px-3 lg:px-10 xl:px-24 rounded-[8px]'>
         <div className='lg:w-[50%] flex flex-col items-center justify-center breathing-exe-drop-shadow p-3 rounded-[8px]'>
          <p className='mb-5 text-[17px] mt-2 px-3 text-center font-bold  text-[#17519BFC]'>Inhale through your nose, take a deep breath, and then exhale through your mouth while speaking a few words or phrases below.</p>
         <p className='text-[17px] sm:text-[20px]  text-justify leading-[30px] text-[#2E2A2A] px-2'>{readingText[readingTextChange]}
          </p>

          <div className='flex items-center justify-center my-7'>
            <button  className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={()=>setReadingTextChange(prev => prev + 1)}>Change Text</button>
          </div>

         </div>
         

          {/*  imgae */}
          {/* <img className='  transition  ease-in-out delay-150  hover:scale-125' src={ArrowImg} alt="" /> */}
          <div className='lg:mt-[-50px] flex items-center justify-center rounded-full  w-[350px] h-[350px]'>
          <div className=' relative rounded-full '>
            <p className='anim-circle'></p>
         </div>

          </div>
          
        </div>
      </div>

      


      {/* see what we have.... */}
      <div data-aos="zoom-in" className='flex flex-col items-center justify-center mt-16'>
        <p className='text-[24px] font-semibold text-center'>Follow us on</p>
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

export default Breathing