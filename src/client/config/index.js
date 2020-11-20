import { isProd } from '../util/env'

const defaultConfig = {
  baseUrl: 'http://localhost:8088',
  debug: true,
  logErrorsToConsole: true,
  app: {
    defaults: {
      weatherUnit: 'imperial',
      historyLimit: 3,
      newsLimit: 5
    }
  },
  author: {
    name: "Prashanth R.",
    url: "https://github.com/prashanthr"
  },
  attribution: {
    sources: [{
      type: 'Quote',
      url: 'https://theysaidso.com',
      name: 'TheySaidSo'
    }, {
      type: 'Weather',
      url: 'https://openweathermap.org',
      name: 'OpenWeatherMap',
    }, {
      type: 'News',
      url: 'https://newsapi.org',
      name: 'NewsAPI'
    },{
      type: 'History',
      url: 'https://github.com/muffinista/really-simple-history-api',
      name: 'MuffinLabs (Colin Mitchell)'
    }]
  }
}

const prodConfig = {
  baseUrl: 'https://today-api.universal-apps.xyz',
  debug: false,
  logErrorsToConsole: true
}

const config = isProd() 
  ? {
      ...defaultConfig,
      ...prodConfig
    }
  : defaultConfig

export default config
