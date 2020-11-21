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
    { animateClassName: 'animate__animated animate__fadeInLeft',  component: <Intro data={data.name} />},
    { animateClassName: 'animate__animated animate__flipInX animate__delay-2s', component: <Weather data={data.wod} />},
    { animateClassName: 'animate__animated animate__fadeInLeft animate__delay-3s', component: <News data={data.nod} />},
    { animateClassName: 'animate__animated animate__fadeInRight animate__delay-4s', component: <History data={data.hod} />},
    { animateClassName: 'animate__animated animate__fadeInLeftBig animate__delay-5s', component: <Quote data={data.qod} />},
    { animateClassName: 'animate__animated animate__fadeInLeft animate__delay-6s', component: <Footer />}
  ]
  return (
    <>
      <div className='today-web-app-layout-container'>
        <div className='today-web-app-container'>
          {components.map((component, idx) => (
            <React.Fragment key={idx}>
              <div className={`today-web-app-component ${component.animateClassName}`}>
                {component.component}
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
