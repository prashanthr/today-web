import React from 'react'
import Intro from '../../../components/intro'
import './index.css'

const AppLayout = ({ children }) => (
  <>
    <div className='today-web-app-layout-container'>
      <Intro />
      {children}
    </div>
  </>
)

export default AppLayout
