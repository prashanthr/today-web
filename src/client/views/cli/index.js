import React from 'react'
import Layout from '../layout'
import Text from '../../components/text'
import Link from '../../components/link'
import config from '../../config'
import cliScreenshot from '../../assets/screenshot/cli.png'
import './index.css'

const Cli = () => (
  <Layout>
    <div className='today-web-view-page'>
      <div className='today-web-view-tagline'>
        <Text>
          Welcome to <Link href='/' color='secondary' isInternal>today</Link>. A unique experience for the current day.
        </Text>
      </div>
      <div className='today-web-view-cli-img animate__animated animate__fadeInLeft animate__animated animate__fadeInLeft'>
        <img src={cliScreenshot} alt='screenshot' />
      </div>
      <div className='today-web-view-cli-code animate__animated animate__fadeInLeftBig animate__animated animate__fadeInLeft'>
        <code>
          npm install -g @universal-apps/today
        </code>
        <Text>View this package, usages and instructions on <Link href={config.todayCliPkgUrl}>NPM</Link></Text>
      </div>
      <br />
      <Text>
        Support this project by <Link href={config.coffeeUrl}>buying me a coffee</Link>
      </Text>
      <br /><br />
    </div>
  </Layout>
)

export default Cli
