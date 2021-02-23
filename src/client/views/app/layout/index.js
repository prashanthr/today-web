import React from 'react'
import PropTypes from 'prop-types'
import Intro from '../../../components/intro'
import Footer from '../../../components/footer'
import Weather from '../../../components/weather'
import News from '../../../components/news'
import History from '../../../components/history'
import Quote from '../../../components/quote'
import Error from '../../../components/error'
import Song from '../../../components/song'
import './index.css'

const AppLayout = ({ data, onDataHookChange, children }) => {
  const components = [
    { animateClassName: 'animate__animated animate__fadeInLeft',  component: <Intro data={data.name} />},
    ...(data.error ? [{ animateClassName: '', component: <Error message={data.errorMessage} />}] : []),
    { animateClassName: 'animate__animated animate__flipInX animate__delay-2s', component: <Weather data={data.wod} unit={data.weatherUnit} onDataHookChange={onDataHookChange} />},
    { animateClassName: 'animate__animated animate__fadeInLeft animate__delay-3s', component: <News data={data.nod} limit={data.newsLimit} onLimitChange={onDataHookChange} />},
    { animateClassName: 'animate__animated animate__fadeInRight animate__delay-4s', component: <History data={data.hod} limit={data.historyLimit} onLimitChange={onDataHookChange} />},
    { animateClassName: 'animate__animated animate__fadeInLeftBig animate__delay-4s', component: <Quote data={data.qod} />},
    { animateClassName: 'animate__animated animate__fadeInLeft animate__delay-4s', component: <Song data={data.sod} />},
    { animateClassName: 'animate__animated animate__fadeInLeft animate__delay-5s', component: <Footer />}
  ]
  return (
    <>
      <div className='today-web-app-layout-container'>
        <div className='today-web-app-container'>
          {components.map((cmp, idx) => (
            <React.Fragment key={idx}>
              <div className={`today-web-app-component ${cmp.animateClassName}`}>
                {cmp.component}
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
