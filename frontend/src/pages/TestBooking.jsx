import React from 'react';
import { Link } from 'react-router-dom';


const TestBooking = () => {
    return (
        <div className='flex flex-col justify-center items-center h-4/5 bg-teal-50'>
            <form className="flex flex-col items-center rounded-lg shadow-md p-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <h1 className="text-center text-green-700 text-2xl mb-4">Test Booking</h1>

                <hr></hr>

                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="text" placeholder="Patient Name" name='patientname'/>

                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="text" placeholder="Test For e.g Malaria" name='disease'/>

                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="date" placeholder="Date for Test" name='date_for_test'/>

                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="time" placeholder="Time for Test" name='time_for_test'/>

                <div className='flex flex-row justify-evenly w-4/5'>
                    <button className="bg-green-700 hover:bg-green-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline w-auto mb-4" type="button">Book</button>

                    <button className="bg-green-700 hover:bg-green-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline w-auto mb-4" type="button">Update</button>

                    <button className="bg-green-700 hover:bg-green-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline w-auto mb-4" type="button">Delete</button>
                </div>                
            </form>
        </div>
    )
}

export default TestBooking;
