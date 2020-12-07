import { isProd } from '../util/env'

const defaultConfig = {
  debug: true,
  logErrorsToConsole: true,
  apiBaseUrl: 'http://localhost:8088',
  ipUrl: "https://ipinfo.io/json",
  coffeeUrl: "https://www.buymeacoffee.com/TGuwXOA",
  todayCliPkgUrl: "https://npmjs.org/package/@universal-apps/today",
  analytics: {
    google: {
      propertyId: 'G-ZGH4CQJZTN'
    }
  },
  app: {
    cache: {
      ttl: 43200 // 12 hrs
    },
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
  ...defaultConfig,
  apiBaseUrl: 'https://today-api.universal-apps.xyz',
  debug: false,
  logErrorsToConsole: true
}

const config = isProd() ? prodConfig : defaultConfig

export default config
