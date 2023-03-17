import React from 'react'
import {Navbar} from './Navbar'
export const Layout = ({children}) => {
  return <React.Fragment>
    <div className='m-auto h-full w-full'>
      <Navbar />
      {children}
    </div>
  </React.Fragment>
}
