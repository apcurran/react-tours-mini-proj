import React, { useState, useEffect } from "react";

import Loading from "./components/Loading";
import Tours from "./components/Tours";

const API_URL = "https://course-api.com/react-tours-project";

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    async function getTours() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
      
            setLoading(false);
            setTours(data);
      
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    }

    function removeTour(id) {
        const newTours = tours.filter((tour) => tour.id !== id);

        setTours(newTours);
    }

    useEffect(() => {
        getTours();
    }, []);

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <h2>No Tours Left</h2>
                <button onClick={getTours} className="btn">Refresh Tours</button>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;