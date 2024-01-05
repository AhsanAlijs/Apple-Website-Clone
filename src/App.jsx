import React from 'react'
import images from './assets/Websiteimages/Navbar.png'

function App() {
  return (
    <>
    <div>
      <div>
        <img src={images} alt="" />
      </div>
      <nav>

        <ul>
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

      </nav>
    </div>
    </>
  )
}

export default App