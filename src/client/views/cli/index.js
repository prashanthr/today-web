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
      <div className='today-web-view-cli-img'>
        <img src={cliScreenshot} alt='screenshot' />
      </div>
      <div>
        <code>
          npm install -g @universal-apps/today
        </code>
        <Text>View this package, usages and instructions on <Link href={config.todayCliPkgUrl}>NPM</Link></Text>
      </div>
    </div>
  </Layout>
)

export default Cli