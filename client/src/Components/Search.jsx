import React, { useEffect, useState } from 'react'
import "./Search.css";
import { Users } from "./Users";
import Table from "./Table";
import axios from "axios"
const Search = () => {
    const [query, setQuery] = useState("");

    // const keys = ["first_name", "last_name", "email"];


    // const searchMethod = (data) => {
    //     return data.filter((item) => {
    //         return keys.some(key => item[key].toLowerCase().includes(search));
    //         // return item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
    //     });
    // }
    // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
    }, [query]);

    return (
        <div className='app'>
            <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            {/* //this is normal */}
            {/* <ul className="list">
                {Users.filter(user => user.first_name.toLowerCase().includes(search)).map(user => (
                    <li key={user.id} className="listItem">{user.first_name}</li>
                ))}
            

            </ul> */}
            <Table data={data} />
        </div>
    )
}

export default Search