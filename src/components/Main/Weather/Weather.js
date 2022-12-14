import React, {useState, useEffect} from 'react';

const Weather = ( ) => {
    const [data, setData] = useState(false);

    const getWeatherData = () => {
        fetch ("https://api.api-ninjas.com/v1/weather?city=Warsaw", {headers:{'X-Api-Key': 'kw3omPTNiV8z5au9VyQfvQ==SQ2hrRf5AGvKLS1G'}})
            .then(response => {
                return response.json();
            })
            .then(result => {
                setData(result.temp)
            })
            .catch(err => {
                alert('Nie udało się pobrać danych pogodowych')
            })
        }

    useEffect( () => {
        getWeatherData()
        }, [])

    if (!data) return <p>Trwa ładowanie danych</p>

    return (
        <div className='location_box_info_weather'>
            <div>
                <p>Warszawa</p>
                <p>Tempreatura: </p>
            </div>
            <p className='location_box_info_weather_temp'>{data} &#8451;</p>
        </div>
    );
};

export default Weather;