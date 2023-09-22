import React , {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import tickIcon from '../../../images/solution/custom-app/tick.svg'
import utilityBlueBg from '../../../images/solution/utility/utility-blue-bg.svg'
import utilityFrontImg from '../../../images/solution/utility/utility-front-bg.svg'
import twIcon from '../../../images/solution/custom-app/tw.svg'
import instaIcon from '../../../images/solution/custom-app/insta.svg'
import inIcon from '../../../images/solution/custom-app/in.svg'

const TongueTwister = () => {

  useEffect(()=>{
    Aos.init({duration : 2000})
  } , [])

  const tongueTw = [
    "How can a clam cram in a clean cream can?",
    "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy, was he?",
    "She sells seashells by the seashore.",
    "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    "Peter Piper picked a peck of pickled peppers.",
    "Betty Botter bought some butter, but she said the butter's bitter. If I put it in my batter, it will make my batter bitter, but a bit of better butter will make my batter better. So she bought some better butter, better than the bitter butter, and it made her batter better, so it was better Betty Botter bought.",
    "Six slippery snails slid slowly seaward.",
    "Unique New York, you need New York" ,
    "A tutor who tooted the flute tried to teach two young tooters to toot. Said the two to the tutor, 'Is it harder to toot, or to tutor two tooters to toot?'",
    "Brave brigadiers brandished broad bright blades, blunderbusses, and bludgeons—balancing them badly",
    "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines.",
    "I have got a date at a quarter to eight; I’ll see you at the gate, so don’t be late.",
    "f a dog chews shoes, whose shoes does he choose?",
    "Near an ear, a nearer ear, a nearly eerie ear.",
    "I wish to wash my Irish wristwatch.",
    "A big black bear sat on a big black rug.",
    "Tom threw Tim three thumbtacks.",
    "He threw three free throws.",
    "Lesser leather never weathered wetter weather better.",
    "Wayne went to wales to watch walruses.",
    "Nine nice night nurses nursing nicely.",
    "Four fine fresh fish for you.",
    "Eddie edited it.",



    // hard
    "Pad kid poured curd pulled cod",
    // "To sit in solemn silence in a dull, dark dock in a pestilential prison with a life-long lock, awaiting the sensation of a short, sharp shock from a cheap and chippy chopper with a big, black block"




  ]

  return (
    <>
         <div data-aos="fade-up">
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] utility-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>Tongue Twisters
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Challenge yourself with tongue twisters to perfect pronunciation and speech agility.</p>

        </div>
      </div>

        {/* blue div */}
      {/* box 2 */}
      <div className='flex items-center justify-center mt-14'>
        <div className='emerging-tech-white-div-drop-shadow bg-[#023267] flex w-full flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] text-white'>
          <p className='text-[22px] sm:text-[23px] text-center sm:text-start '>Tongue twisters offer numerous advantages, including improved articulation, speech agility, and enhanced fluency. By practicing these twister provided, you can gradually increase your pronunciation speed and accuracy. Consistent practice fosters clear, confident speech, making these exercises a valuable addition to your speech improvement routine.</p>

        </div>
      </div>



      {/* tongue twisters starts */}

      <div className=' p-3 sm:px-5 py-4 sm:mx-10 md:mx-20 lg:mx-40 mt-10 text-[22px] leading-9'>
        
        {
          tongueTw.map((item , i)=>
            (

              <p key={i} className='my-6 p-5 speech-to-text-drop-shadow'>  {item}</p>
              
              
              )
           
          )
        }
        

      </div>



      {/* tongue twister ends */}
    



    


 {/* see what we have.... */}
 <div data-aos="fade-up" className='flex flex-col items-center justify-center mt-16'>
                <p className='text-[24px] font-semibold text-center'>Follow us ons</p>
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

export default TongueTwister