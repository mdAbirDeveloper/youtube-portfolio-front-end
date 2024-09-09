import React from 'react'
import Navber from '../Shaired/Navber';
import Footer from '../Shaired/Fotter';

const Layout = ({children}) => {
  return (
    <div>
      <Navber></Navber>
      {children}
      <Footer />
    </div>
  )
}

export default Layout;