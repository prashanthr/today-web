import React from 'react';
import Layout from '../layout'
import Text from '../../components/text'
import Link from '../../components/link'
import screenshot from '../../assets/logo.svg'
import './index.css'

const Home = () => (
  <Layout>
    <div className='today-web-view-home'>
      <div className='today-web-view-home-tagline'>
        <Text>
          Welcome to <Text color='secondary'>today</Text>. A unique experience for the current day.
        </Text>
      </div>
      <div className='today-web-view-home-image'>
        <img src={screenshot} />
      </div>
      <div className='today-web-view-home-access'>
        <Text>Available on <Link href='/app' isInternal>web</Link> or <Link href='https://npmjs.org/package/@universal-apps/today'>cli</Link></Text>
      </div>
    </div>
  </Layout>
)

export default Home
