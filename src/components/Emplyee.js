import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useEmployee from '../hooks/useEmployee';
import './Form.css'

const Emplyee = () => {
    let searchedName;
    const [employeeData] = useEmployee(searchedName)
    const [searchText, setSearchText] = useState("")

    const navigate = useNavigate()

    const navigator = (id) => {
        console.log(id)
        navigate(`/${id}`)
    }


    return (
        <div style={{ width: '90%' }} className='mx-auto  table-responsive '>
            <h2 className='text-center my-3'>Here is all employees</h2>

            <Link className='text-decoration-none w-25  text-center' role='button' to='/'> <h5 className='text-decoration-underline ' style={{ color: 'darkblue' }}> Back to home Page </h5></Link>

            <input type="text" onChange={(e) => { setSearchText(e.target.value) }} />

            <table className='mt-5 table table-bordered'>
                <thead>
                    <tr>
                        <td>Index</td>
                        <td>Employee ID</td>
                        <td>Name</td>
                        <td>Date of Birth</td>
                        <td>Designation</td>
                        <td>Organization</td>
                        <td>Gender</td>
                        <td>Time of Entry</td>
                        <td>Photo</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeData &&
                        employeeData.filter((employee) => {
                            if (searchText === "") {
                                return employee;
                            } else if (employee?.name?.toLowerCase()?.includes(searchText.toLowerCase())) {
                                return employee;
                            }
                        }).map((employee, index) => <tr key={employee._id}>
                            <td>{index + 1}</td>
                            <td>{employee.employeeId}</td>
                            <td onClick={() => navigator(employee._id)}>{employee.name}</td>
                            <td>{employee.dob}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.org}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.timeOfEntry}</td>
                            <td><img className='e-img mx-auto' src={employee.img} alt="img" /></td>
                        </tr>)
                    }
                </tbody>
            </table>


        </div>
    );
};

export default Emplyee;