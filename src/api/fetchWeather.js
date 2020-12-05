import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'

const API_KEY = '03ffeb611d8b1b8b56e91e9904693a8c';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}