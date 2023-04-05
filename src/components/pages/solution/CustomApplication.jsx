import React from 'react'
import serviceImg from '../../../images/solution/custom-app/services-img.svg'
import tickIcon from '../../../images/solution/custom-app/tick.svg'
const CustomApplication = () => {
    return (
        <>
            {/* custom application bg div  */}
            <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] custom-app-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

                <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>CUSTOM APPLICATION MANAGEMENT
                </h1>
                <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Whether a customer wants to build custom software from scratch or enhance and maintain an existing home-built application, Agile Global can provide the right expertise, delivery and execution model to assist in all phases of the Software Development Life Cycle.
                </p>

            </div>

            {/* below hero section */}
            <div className='my-8 flex flex-col items-center justify-center'>
                <p className='text-[20px] font-semibold text-clip sm:text-[25px] md:text-[35px] lg:text-[40px] mb-7'>Our services include:</p>

            {/* image and text div */}
            <div className='flex flex-col items-center justify-center gap-5 lg:flex-row px-3 lg:px-20'>
                {/* img div */}
                <img className='' src={serviceImg} alt="" />
                {/* content div */}
                <div className='flex items-center justify-center bg-[#023267] text-white rounded-[15px] lg:w-[40%] p-4'>
                    <ul className='flex items-start flex-col justify-center gap-3'>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Project management</p>  </li>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3 '> <img src={tickIcon} alt="" /> <p>Business analysis</p>  </li>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Application design and development</p>  </li>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Migrations and conversions</p>  </li>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Quality Assurance and Testing</p>  </li>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Technical Writing</p>  </li>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Implementation</p>  </li>
                        <li className='flex items-center justify-center text-start text-[22px] gap-3 pl-3'> <img src={tickIcon} alt="" /> <p>Post-production support</p>  </li>
                    </ul>
                </div>
            </div>

             {/* hr line */}
           <div className='line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-12 mb-6 ' ></div>
           <p className='text-center text-[20px] leading-[30px] px-3 md:px-20 lg:px-36 xl:px-48'>Considering every client’s business is unique, both in the solutions they offer as well as their operations, AGILE GLOBAL’s Custom Application Management solution focuses on creating, integrating, enhancing and supporting core and add-on scalable applications and systems that help achieve your current and future business objectives.
AGILE GLOBAL offers the range of solutions you need for optimized quality, enhanced business value and a reduced total cost of ownership (TCO).</p>


            </div>

            {/* recognization div */}
          <div className='flex flex-col items-center justify-center mt-10 '>
          <p className='text-[28px] sm:text-[34px] md:text-[48px] font-bold text-center my-5'>Our <span className='text-[#17519B]'>Recognitions</span> & Awards</p>

        {/* blue and white boxs div starts  */}
        <div>
            {/* box 1  */}
            <div>
                <img src="" alt="" />
                <p>Best Services</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p>Read more...</p>
            </div>
        </div>

          </div>

        </>
    )
}

export default CustomApplication