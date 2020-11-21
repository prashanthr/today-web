import React from 'react'
import PropTypes from 'prop-types'
import Intro from '../../../components/intro'
import Footer from '../../../components/footer'
import Weather from '../../../components/weather'
import News from '../../../components/news'
import History from '../../../components/history'
import Quote from '../../../components/quote'
import './index.css'

const AppLayout = ({ data, children }) => {
  const components = [
    <Intro data={data.name} />,
    <Weather data={data.wod} />,
    <News data={data.nod} />,
    <History data={data.hod} />,
    <Quote data={data.qod} />,
    <Footer />
  ]
  return (
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
}

AppLayout.propTypes = {
  data: PropTypes.shape({

  })
}

AppLayout.defaultProps = {
  data: {}
}

export default AppLayout
