import React, { useEffect, useState, useCallback } from "react";

const avatarUrl = `http://github.com/naderik.png`

const HomePage = () => {

    const [data, setData] = useState([]);

    const fetchData = useCallback(() => {
        fetch(`https://api.github.com/users/naderik`)
            .then((response) => response.json())
            .then(data => setData(data))
    }, []);

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    if (data) {
        return (

            <>
                <img src={avatarUrl} className="App-logo" alt="logo" />
                <p>
                    Personal E-Portfolio !
                </p>
                <p>My name is {data.name}</p>
            </>
        );

    } else {
        return (
            <h1>Loading...</h1>
        )
    }
};


export default HomePage