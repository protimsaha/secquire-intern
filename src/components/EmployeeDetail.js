import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    // const [detail, setDetail] = useState({})
    const { id } = useParams()

    setInterval(() => {
        console.log("hello")
    }, 3600 * 1000)


    useEffect(() => {
        const url = `http://localhost:5000/employees/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [id])


    return (
        <div>
            {id}
            {/* <h2>{detail._id}</h2>
            <h2>{detail.name}</h2> */}
        </div>
    );
};

export default EmployeeDetail;