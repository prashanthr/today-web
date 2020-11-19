import React from 'react'
import Intro from '../../../components/intro'
import Footer from '../../../components/footer'
import './index.css'

const components = [
  <Intro />,
  <Footer />
]

const AppLayout = ({ children }) => (
  <>
    <div className='today-web-app-layout-container'>
      <div className='today-web-app-container'>
        {components.map((component, idx) => (
          <React.Fragment key={idx}>
            {component}
          </React.Fragment>
        ))}
        {children}
      </div>
    </div>
  </>
)

export default AppLayout
