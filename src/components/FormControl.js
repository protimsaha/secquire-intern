import { format } from 'date-fns';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';


const FormControl = () => {
    const imageStorageKey = '02ac56fd7f18d837b23894d27b8c36fb'
    const [img, setImg] = useState("")


    const imageTake = (event) => {
        const imageEvent = event.target.files[0]
        const formData = new FormData()
        formData.append('image', imageEvent)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                data && setImg(data.data.url)
            })
    }


    const handleSubmit = event => {
        event.preventDefault()
        const employeeId = event.target.employeeId.value;
        const name = event.target.name.value
        const dob = event.target.dob.value
        const designation = event.target.designation.value
        const org = event.target.org.value
        const gender = event.target.gender.value

        const date = new Date();
        const formatedTime = format(date, 'HH:mm:ss')

        const employeeForm = {
            employeeId: employeeId,
            name: name,
            dob: dob,
            designation: designation,
            org: org,
            gender: gender,
            timeOfEntry: formatedTime,
            img: img
        }


        axios.post("http://localhost:5000/employee", employeeForm)
            .then(res => {
                toast.success("Employee data added successfully")
                localStorage.setItem("accessToken", res.data.accessToken)
            })

        // .then(data => console.log(data))
        // console.log(data);
    }

    return (
        <div className='mb-5'>
            <h2 className='text-center'>Please give all the valid information.</h2>

            <Link className='text-decoration-none w-25 text-center  ' role='button' to='/employee'> <h5 className='text-decoration-underline  ' style={{ color: 'darkblue', hover: 'underline' }}> Employee Page </h5></Link>

            <form onSubmit={handleSubmit} className='mt-5 d-flex flex-column w-50 rounded  mx-auto shadow'>
                <h2 className='text-center mt-5 mb-3'>FORM</h2>
                <input name='employeeId' className='w-50 my-2 mx-auto rounded-pill ps-3  border border-4' type="text" placeholder='Employee Id' required />
                <input name='name' className='w-50 my-2 mx-auto rounded-pill ps-3  border border-4' type="text" placeholder='Name' required />
                <input name='dob' className='w-50 my-2 mx-auto rounded-pill ps-3  border border-4' type="text" placeholder='Date of Birth' required />
                <input name='designation' className='w-50 my-2 mx-auto rounded-pill ps-3  border border-4' type="text" placeholder='Designation' required />
                <input name='org' className='w-50 my-2 mx-auto rounded-pill ps-3  border border-4' type="text" placeholder='Organization' required />
                <input name='gender' className='w-50 my-2 mx-auto rounded-pill ps-3  border border-4' type="text" placeholder='Gender' required />


                <input onChange={imageTake} className='w-25 mx-auto my-2' id='image-input' type="file" placeholder='Upload Photo' accept required />
                <input className='btn w-25 mx-auto bg-dark mt-3 mb-5 text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormControl;