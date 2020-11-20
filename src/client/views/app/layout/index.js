import React from 'react'
import Intro from '../../../components/intro'
import Footer from '../../../components/footer'
import Weather from '../../../components/weather'
import './index.css'

const components = [
  <Intro />,
  <Weather />,
  <Footer />
]

const AppLayout = ({ data, children }) => (
  <>
    <div className='today-web-app-layout-container'>
      <div className='today-web-app-container'>
        {components.map((component, idx) => (
          <React.Fragment key={idx}>
            <div className='today-web-app-component'>
              {component}
            </div>
          </React.Fragment>
        ))}
        {children}
      </div>
    </div>
  </>
)

export default AppLayout
