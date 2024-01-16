import { faCartFlatbedSuitcase, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const App = () => {
  return (
    <>
      <div className=' bg-[gray] flex items-center justify-center gap-[30px] p-[8px] text-[#fff]'>
        <header><img src="https://www.pngkey.com/png/full/275-2757097_apple-iphone-white-logo-png.png" alt="" className='w-[25px]' /></header>

        <ul className='flex items-center justify-center gap-[50px] text-[12px] cursor-pointer'>
          <li>Store</li>
          <li>Mac</li>
          <li>Ipad</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>Airpods</li>
          <li>Tv&Movies</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>

        <div className='ml-[30px]'>
          <ul className='flex items-center justify-center gap-[10px]'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
          </ul>
        </div>


      </div>

      <div className='bg-img flex items-center justify-center'>
        <div className='mt-[50vmin] flex items-center justify-center flex-col'>
          <img src="https://www.apple.com/v/home/bi/images/logos/apple-vision-pro/hero_logo_apple_vision_pro__ea9qv4w4cngy_largetall.png" alt="" />
          <p className='text-[30px]'>Welcome to the era of spatial computing.</p>
          <p className='text-[20px]'>Pre-order starting 1.19 at 5:00 a.m. PT Available&nbsp;starting&nbsp;2.2</p>
          <br />
          <a href="#" className='text-[20px] text-[#292996] hover:underline transition-all'>Leaen More</a>
        </div>
      </div>
      <div className='bg-[white] p-[5px]'>
      </div>

      <div className='bg-2 flex  justify-center'>
        <div className='flex items-center  flex-col text-[#fff] mt-[30px]'>
          <h1 className='text-[60px] font-extrabold'>iphone 15 pro</h1>
          <p className='text-[30px]'>Titanium.So strong.So light.So pro</p>
          <div className='flex items-center justify-center gap-[50px] mt-[20px] text-[#6ac6ff] text-[20px]'>
            <a href="#">Learn More</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </div>

      <div className='bg-3 flex  justify-center'>
        <div className='flex items-center  flex-col text-[#000] mt-[30px]'>
          <h1 className='text-[60px] font-extrabold'>iphone 15</h1>
          <p className='text-[30px]'>New camera. New design. Newphoria.</p>
          <div className='flex items-center justify-center gap-[50px] mt-[20px] text-[#3ba2e2] text-[20px]'>
            <a href="#">Learn More</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </div>

    </>
  )
}

export default App