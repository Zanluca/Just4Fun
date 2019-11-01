import { APIKEY } from './config'

const API_PATH = 'https://nimbus.somar.io/forecast'

const normalize = data => {
    const { days } = data
    const { temperature_daily_max } = data.points.forecast
    const { temperature_daily_min } = data.points.forecast

    return { days, temperature_daily_max, temperature_daily_min }
}

const getWeekWeather = async () => {
    const response = await fetch(API_PATH + '/7days?city=SaoPaulo-SP&reference=Somar', {
        headers: new Headers({
            'x-api-key': APIKEY
        })
    })
    const json = await response.json().then(normalize)

    return json
}

export {
    getWeekWeather
}