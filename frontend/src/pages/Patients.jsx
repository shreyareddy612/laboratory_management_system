import React, {useState, useEffect} from 'react';
import { Link, useActionData } from 'react-router-dom';
import http from '../http-common';

import PatientCard from '../components/PatientCard';


const Patients = () => {
    const [allPatients, setAllPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState('Waiting');
    const [formData, setFormData] = useState({
        results: ""
    });

    /**
     * @description handles form input change
     * @param {*} event to trigger a change event
     */
    const handleOnChange = (event) => {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleFilterChange = (filter) => {
        setFilteredPatients(filter);
    }

    const filterPatients = (patients) => {
        if (filteredPatients === "Waiting") {
            return patients;
        } else if (filteredPatients === "Pending") {
            return patients.filter((patient) => patient.results === "Pending...");
        } else if (filteredPatients === "Negative") {
            return patients.filter((patient) => patient.results === "Negative");
        } else if (filteredPatients === "Positive") {
            return patients.filter((patient) => patient.results === "Positive");
        }
    }

    /**
     * @description Gets data for all patients
     * @returns an array of all patients
     */
    const getAllPatients = async () => {
        try {
            const results = await http.get("/results/allPatients");
            setAllPatients(results.data.patients);
        } catch (error) {
            return { error: error };
        }
    }

    useEffect(() => {
        getAllPatients();
    }, []);

    const filtered = filterPatients(allPatients);

    return (
        <div className='flex flex-col items-center bg-teal-50 mt-4'>
            <div className='flex flex-col items-center rounded-lg p-2 w-full'>
                <h2 className="h2">Welcome to Patients Page</h2>
                <hr />
                <div className='flex flex-row'>
                    <Link className='link-nav-btn' to='' onClick={() => handleFilterChange('Waiting')}>Waiting</Link>
                    <Link className='link-nav-btn' to='' onClick={() => handleFilterChange('Pending')}>Pending</Link>
                    <Link className='link-nav-btn' to='' onClick={() => handleFilterChange('Positive')}>Positive</Link>
                    <Link className='link-nav-btn' to='' onClick={() => handleFilterChange('Negative')}>Negative</Link>                    
                </div>                
                <hr />
                {/* List of tested patients waiting for their */}
                <div className='flex flex-col items-center w-full m-1 p-1 rounded-md border'>
                    {/* Search Box */}
                    <div>
                        <form action="" className='flex flex-row p-1'>
                            <input className='block appearance-none w-full h-10 bg-white border border-gray-200 text-gray-700 m-2 p-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' type="text" placeholder='Search by Name or Test No...' name='search'/>
                        </form>
                    </div>
                    
                    {/* List of all or filtered tested patients */}
                    <PatientCard parients={filtered}/>
                </div>
            </div>            
        </div>
    )
}

export default Patients;