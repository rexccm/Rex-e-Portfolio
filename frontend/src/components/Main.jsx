import { useState, useEffect } from 'react';
import './Main.css'; 
import Aside from '../components/Aside'; 

const Main = () => {
    /* Hooks */
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(err => {
            setError(err.message);
        })
        .finally(() => {
            setLoading(false); 
        });
    }, []);

    return (
        <main>
            <div className="row">
                <div className="columns">
                    <Aside />
                    <div className="main">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <>
                                <h1>Rex Chan's e-Portfolio</h1>
                                <p>Welcome</p>
                                <pre>{JSON.stringify(data.weatherForecast[0], null, 2)}</pre>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    ); 
}; 

export default Main;