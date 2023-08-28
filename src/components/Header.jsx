import React from 'react'

const Header = () => {
  return (
    <nav>
        <NavContent/>
    </nav>
  )
}

const NavContent = ()=>(
    <>
        <h2>It's Jitu</h2>
        <div>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#experince">Experince</a>
            <a href="#services">Services</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
        </div>
    </>
)

export default Header
