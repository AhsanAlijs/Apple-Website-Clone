import React from 'react'
import images from './assets/Websiteimages/Navbar.png'

function App() {
  return (
    <>
      <div className='flex items-center justify-center bg-[#6a6969] gap-[10rem] '>
        <div>
          <img src={images} alt="new" className='w-[50px]' />
        </div>
        <nav className='flex items-center justify-center gap-[10px]'>

          <ul className='flex items-center justify-center gap-[30px] text-[white]'>
            <li><a>Store</a></li>
            <li><a>Mac</a></li>
            <li><a>ipad</a></li>
            <li><a>iphone</a></li>
            <li><a>Watch</a></li>
            <li><a>vision</a></li>
            <li><a>Airpods</a></li>
            <li><a>TV&Home</a></li>
            <li><a>Entertainment</a></li>
            <li><a>Accessories</a></li>
            <li><a>Support</a></li>
          </ul>
          <div className='text-[white] flex items-center justify-center gap-[10px]'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
          </div>
        </nav>
      </div>
    </>
  )
}

export default App