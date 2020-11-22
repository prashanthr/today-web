import React from 'react';
import Layout from '../layout'
import Text from '../../components/text'
import Link from '../../components/link'
import { Emoji } from '@universal-apps/swan-react'
import './index.css'

const Home = () => (
  <Layout>
    <div className='today-web-view-home'>
      <div className='today-web-view-home-tagline'>
        <Text>
          Welcome to <Text color='secondary'>today</Text>. A unique experience for the current day.
        </Text>
      </div>
      <div className='today-web-view-home-description'>
          <p>At a glance</p>
          <ul>
            <li>- Weather forecast <Emoji symbol={'☀️'} alt='weather' /></li>
            <li>- Top headlines <Emoji symbol={'🗞'} alt='news' /></li>
            <li>- Historical notes <Emoji symbol={'🎓'} alt='mortarboard' /></li>
            <li>- Daily inspirational quote <Emoji symbol={'✨'} alt='spark' /></li>
          </ul>
      </div>
      <div className='today-web-view-home-access'>
        <Text>Available on <Link href='/app' isInternal>web</Link> or <Link href='https://npmjs.org/package/@universal-apps/today'>cli</Link></Text>
      </div>
    </div>
  </Layout>
)

export default Home
