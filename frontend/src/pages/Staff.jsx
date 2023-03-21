import React from 'react';
import { Link } from 'react-router-dom';


const Staff = () => {
    return (
        <div className='flex flex-col items-center h-4/5 bg-teal-50 mt-4'>
            <div className='flex flex-col items-center rounded-lg shadow-md p-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3'>
                <h2 className="text-center text-green-700 text-2xl mb-4">Welcome to Staff Page</h2>
                <hr />
                <Link className='flex items-center w-4/5 underline mb-3' to='/results'>Results</Link>
                <Link className='flex items-center w-4/5 underline mb-3' to='/report'>Lab Report</Link>
            </div>            
        </div>
    )
}

export default Staff;