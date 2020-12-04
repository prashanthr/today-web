import React, { useState } from 'react'
import Layout from '../layout'
import AppLayout from './layout'
import './index.css'
import { useData } from '../../effects/use-data'
import { buildInitialState } from '../../api'

const App = () => {
  const [effectData, setEffectData] = useState(buildInitialState({}))
  let appData = useData({ initData: effectData })
  const onDataHookChange = ({ key, value }) => {
    switch (key) {
      default:
        setEffectData({ 
          ...effectData,
          forceUpdate: true,
          [key]: value
        })
    }
  }
  return (
    <Layout>
      <AppLayout data={appData} onDataHookChange={onDataHookChange}>
      </AppLayout>
    </Layout>
  )
}

export default App
