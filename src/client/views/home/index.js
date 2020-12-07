import React from 'react';
import Layout from '../layout'
import Text from '../../components/text'
import Link from '../../components/link'
import { Emoji } from '@universal-apps/swan-react'
import config from '../../config'
import './index.css'

const Home = () => (
  <Layout>
    <div className='today-web-view-page'>
      <div className='today-web-view-tagline'>
        <Text>
          Welcome to <Text color='secondary'>today</Text>. A unique experience for the current day.
        </Text>
      </div>
      <div className='today-web-view-home-description'>
        <p className='animate__animated animate__fadeInLeftBig'>At a glance</p>
        <ul>
          <li className='animate__animated animate__fadeInLeft animate__delay-1s'>- Weather forecast <Emoji symbol={'☀️'} alt='weather' /></li>
          <li className='animate__animated animate__fadeInLeft animate__delay-2s'>- Top headlines <Emoji symbol={'🗞'} alt='news' /></li>
          <li className='animate__animated animate__fadeInLeft animate__delay-3s'>- Historical notes <Emoji symbol={'🎓'} alt='mortarboard' /></li>
          <li className='animate__animated animate__fadeInLeft animate__delay-4s'>- Daily inspirational quote <Emoji symbol={'✨'} alt='spark' /></li>
        </ul>
      </div>
      <div className='today-web-view-home-access'>
        <Text>Available on <Link href='/app' isInternal>web</Link> or <Link href='/cli' isInternal>cli</Link></Text>
      </div>
      <br />
      <div className='today-web-view-home-support'>
        <Text>Support this project by <Link href={config.coffeeUrl}>buying me a coffee</Link></Text>
      </div>
    </div>
  </Layout>
)

export default Home
