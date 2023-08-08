import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import person from '../images/person.png';

import http from '../http-common.js';


const Staff = () => {
    const [staffs, setStaffs] = useState([]);

    const getStaffs = async () => {
        try {
            const response = await http.get('/user/getStaffs');
            setStaffs(response.data.staffs);
            console.log(response.data.staffs);
        } catch (error) {
            console.log({ error: error });
        }
    }

    useEffect(() => {
        getStaffs();
    }, []);

    return (
        <div className='flex flex-col items-center bg-teal-50 mt-4'>
            <div className='flex flex-col items-center rounded-lg p-2 w-full'>
                <h2 className="h2">Welcome to Staff Page</h2>
                <hr />
                <div className='flex flex-row'>
                    <Link className='link-nav-btn' to='/results'>Waiting</Link>
                    <Link className='link-nav-btn' to='/results'>Results</Link>
                    <Link className='link-nav-btn' to='/report'>Report</Link>
                    <Link className='link-nav-btn' to='/patients'>Patients</Link>
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
                            staffs.length > 0 ? (
                                staffs.map((staff) => (
                                    <div className='flex flex-col w-56 h-auto items-center border shadow-md m-1 p-1' key={staff._id}>
                                        <div className='flex rounded-full border p-1'>
                                            <img src={person} alt="" srcset="" />
                                        </div>
                                        <Link to="/staff">
                                            <span className='underline'>
                                                {staff.full_name}
                                            </span>
                                        </Link>                                        
                                        <hr />
                                        <span>{staff.designation}</span>
                                        <span>{staff.email}</span>
                                        <hr />
                                        <div className='flex flex-row justify-between'>
                                            <button type="button" className='link-nav-btn'>Update</button>
                                            <button type="button" className='link-nav-btn'>Print</button>
                                        </div>
                                    </div>
                                ))           
                            ) : (
                                <p>No Staffs</p>
                            )
                        }                        
                        {/* End of card */}
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Staff;