import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='flex flex-col justify-center items-center h-4/5 bg-teal-50'>
            <form className="flex flex-col items-center rounded-lg shadow-md p-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                <h1 className="text-center text-green-700 text-2xl mb-4">Login</h1>
                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" type="email" placeholder="Email" />
                
                <input className="border-b-2 border-gray-400 w-4/5 p-2 mb-4 focus:outline-none focus:border-green-700" type="password" placeholder="Password" />

                <button className="bg-green-700 hover:bg-green-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline w-4/5 mb-4" type="button">Login</button>
                <span>Don't have an account? <Link to='/register'>Register</Link></span>
            </form>
        </div>
    )
}

export default Login;