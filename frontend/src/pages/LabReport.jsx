import React from 'react';
import { Link } from 'react-router-dom';


const LabReport = () => {
    return (
        <div className='flex flex-col items-center h-4/5 bg-teal-50'>
            <div className="flex flex-col border rounded-l mt-4 p-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <h2 className="text-center text-green-700 text-2xl mb-4">LabMS Lab Report</h2>
                <hr />
                <h2>Test No: <span id='test_no'>bk100</span></h2>
                <h2>Patient Name: <span id='patientname'>Mbithi Charles</span></h2>
                <h2>Test For: <span id='test_for'>Malaria</span></h2>
                <h2>Results: <span id='results'>Negative</span></h2>
                <h2>Date Tested: <span id='date_tested'>12/03/2023</span></h2>
                <h2>Date Results Posted: <span id='posted_on'>12/03/2023</span></h2>
                <h2>Comment: <span id='comment'>Continue taking care of yourself.</span></h2>
            </div>
            <div className='flex flex-row justify-start'>
                <button className='bg-green-700 text-white mt-3 p-2 border rounded-md'>Print</button>
            </div>
        </div>
    )
}

export default LabReport;