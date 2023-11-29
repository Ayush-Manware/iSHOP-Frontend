import React from 'react'
import TopbarMain from '../TopBar/TopbarMain'
import Logo from '../logo/Logo'
import Navbar from '../navbar/Navbar'
import Routing from '../Routing/Routing'

const MainFile = () => {
  return (
    <div>
        <TopbarMain />
        <Logo />
        <Navbar />
        <Routing />
    </div>
  )
}

export default MainFile