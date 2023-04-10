import React from 'react'

const Infrastructure = () => {
  return (
  <>
     <div>
        {/* custom application bg div  */}
        <div className='w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] infrastructure-bg-img flex flex-col items-center justify-center px-3 lg:px-40'>

          <h1 className='text-[24px]  sm:text-[47px] md:text-[49px] xl:text-[57px] leading-[58px] xl:px-20 font-bold text-white text-center mt-5 mb-4'>BUSINESS INTELLIGENCE & EAI
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[18px] xl:text-[22px] text-white text-center'>Understanding relevant data allows organizations make the right decision for their employees, shareholders and customers. Our SMEs specialize in Big Data, Analytics, Data Mining, Data warehousing, Dashboard creation as well as integration of disparate Enterprise applications that do not understand each other.</p>


        </div>
      </div>
      {/* blue div text */}
      <div className='flex items-center justify-center bg-[#023267]'>
        <p className='text-[18px] sm:text-[24px] text-white text-center p-3 sm:p-5 md:p-10 lg:px-48'>With the increased emphasis on cyber and network security, this has become a critical component of our solution offering. Our subject matter experts, many of them CISSP certified, provide the following:</p>
      </div>
      {/* white bg li div */}
      <div className=' flex flex-col gap-3 md:flex-row md:gap-5 items-center justify-center my-5'>
        <ul className=' flex flex-col items-start justify-start gap-3 lg:w-[373px]'>
            <li className='list-disc text-[18px] md:text-[24px]'>Security Audits</li>
            <li className='list-disc text-[18px] md:text-[24px]'>Business Continuity / Disaster Recovery Planning</li>
            <li className='list-disc text-[18px] md:text-[24px]'>Security Policy deployment</li>
            <li className='list-disc text-[18px] md:text-[24px]'>Security Systems Integration</li>
        </ul>

        <ul className=' flex flex-col items-start justify-start gap-3 lg:w-[373px]'>
            <li className='list-disc text-[18px] md:text-[24px]'>Infrastructure setup and support services</li>
            <li className='list-disc text-[18px] md:text-[24px]'>Security infrastructure design and implementation</li>
            <li className='list-disc text-[18px] md:text-[24px]'>Security Optimization and upgrade</li>
        </ul>
      </div>
        {/* blue bg long div */}


        <div className='my-5 bg-[#023267] p-3'>
            {/* grey card */}
            <div>
                {/* grey card 1 */}
                  <div className='bg-[#FFFFFF]'>
                    <p className='text-[22px] leading-[22px] text-[#1D1D1E]'>Systems Administration</p>
                  </div>
            </div>
        </div>




  </>
  )
}

export default Infrastructure