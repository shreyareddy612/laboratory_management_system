import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import person from '../images/person.png';
import personFemale from '../images/person-female.png';
import http from '../http-common';


const Patients = () => {
    const [allPatients, setAllPatients] = useState([]);
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

    /**
     * @description Gets data for all patients
     * @returns an array of all patients
     */
    const getAllPatients = async () => {
        try {
            const results = await http.get("/results/allPatients");
            console.log(results.data);
            setAllPatients(results.data);
        } catch (error) {
            return { error: error };
        }
    }

    useEffect(() => {
        getAllPatients();
    }, []);

    return (
        <div className='flex flex-col items-center bg-teal-50 mt-4'>
            <div className='flex flex-col items-center rounded-lg p-2 w-full'>
                <h2 className="h2">Welcome to Patients Page</h2>
                <hr />
                <div className='flex flex-row'>
                    <Link className='link-nav-btn' to='/results'>Waiting</Link>
                    <Link className='link-nav-btn' to='/results'>Results</Link>
                    <Link className='link-nav-btn' to='/report'>Report</Link>
                </div>                
                <hr />
                {/* List of tested patients waiting for their */}
                <div className='flex flex-col items-center w-full m-1 p-1 rounded-md border'>
                    {/* Search Box */}
                    <div>
                        <form action="" className='flex flex-row p-1'>
                            <select class="block appearance-none w-2/3 h-10 bg-white border border-gray-200 text-gray-700 m-2 p-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name='resuts'>
                                <option value="" disabled selected>Select Results</option>
                                <option value="pending">Pending...</option>
                                <option value="positive">Positive</option>
                                <option value="negative">Negative</option>
                            </select>

                            <input type="button" value="Search" className='link-nav-btn h-10'/>
                        </form>
                    </div>

                    {/* List of all or filtered tested patients */}
                    <div className='flex flex-wrap justify-center'>                     
                        
                        {/* Patient Card */}
                        {
                            allPatients.length > 0 ? (
                                allPatients.map((patient) => (                            
                                    <div className='flex flex-col w-56 h-auto items-center border shadow-md m-1'>
                                        <div>
                                            <img src={person} alt="" srcset="" />
                                        </div>
                                        <span>John Doe</span>
                                        <hr />
                                        <span>Test: Malaria Test</span>
                                        <span>Test No: {patient.test_no}</span>
                                        <span>Results: {patient.results}</span>
                                        <hr />
                                        <div className='flex flex-row justify-between'>
                                            <button type="button" className='link-nav-btn'>Update</button>
                                            <button type="button" className='link-nav-btn'>Print</button>
                                        </div>
                                    </div>
                                )
                            )): (
                                <p className='text-red'>No patients found</p>
                            )
                        }
                        {/* End of card */}
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Patients;