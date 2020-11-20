import React from 'react'
import Layout from '../layout'
import AppLayout from './layout'
import { getData, buildInitialState } from '../../api'
import './index.css'
import { useData } from '../../effects/use-data'

const App = () => {
  const data = useData({})
  return (
    <Layout>
      <AppLayout data={data}>
      </AppLayout>
    </Layout>
  )
}

export default App
