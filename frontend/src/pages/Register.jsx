import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='flex flex-col justify-center items-center h-4/5 bg-teal-50'>
            <form className="flex flex-col items-center rounded-lg shadow-md p-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <h1 className="text-center text-green-700 text-2xl mb-4">Register</h1>

                <hr></hr>

                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="text" placeholder="Full Name" name='fullname'/>

                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="email" placeholder="Email" name='email'/>

                <select class="block appearance-none w-4/5 bg-white border border-gray-200 text-gray-700 mb-4 p-2 leading-tight focus:outline-none focus:bg-white focus:border-green-700" name='designation'>
                    <option value="" disabled selected>Select Designation</option>
                    <option value="patient">Patient</option>
                    <option value="technician">Lab Technician</option>
                </select>

                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="text" placeholder="Phone" name='phone'/>
                
                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" required type="password" placeholder="Password" name='password'/>

                <button className="bg-green-700 hover:bg-green-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline w-4/5 mb-4" type="button">Register</button>
                <span>Have an account? <Link to='/login'>Login</Link></span>
            </form>
        </div>
    )
}

export default Register;
