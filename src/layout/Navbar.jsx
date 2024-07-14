import React from 'react'
import Logo from '../images/pokemon-logo.png'

const Navbar = () => {
  return (
    <div className='w-full bg-white border-b-[1px] shadow-lg mb-4'>
      <div className='max-w-[1440px] mx-auto'>
        <div>
          <a href="/"><img className='max-w-40 mx-auto' src={Logo} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar