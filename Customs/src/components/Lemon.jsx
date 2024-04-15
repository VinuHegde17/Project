import React, { useEffect, useState } from 'react';

function Lemon() {
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchData = () => {
            fetch('https://randomuser.me/api/?results=1')
                .then(response => response.json())
                .then(data => setUser(data));
        };
        
        fetchData();
        console.log(fetchData);
    }, []);

    return user ? (
        <div>
            <h1>Data Returned</h1>
            <h1>First name is {user.results[0].name.first}</h1>
            <h1>Last name is {user.results[0].name.last}</h1>
        </div>
    ) : (
        <h1>Data is fetching</h1>
    );
}

export default Lemon;
