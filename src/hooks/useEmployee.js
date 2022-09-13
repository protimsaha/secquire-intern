import { useEffect, useState } from "react";

const useEmployees = () => {
    const [employeData, setEmployeeData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployeeData(data))
    }, [])

    return [employeData, setEmployeeData]
};

export default useEmployees;
