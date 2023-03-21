import React from 'react';


const ContactUs = () => {
    return (
        <div className='flex flex-col items-center h-4/5 bg-teal-50 p-auto'>
            <h1 className='font-bold text-green-700 font- sm:text-4xl md:text-4xl lg:text-5xl'>
                Contact Us
            </h1>

            <hr></hr>

            <div className='flex flex-col md:flex-row justify-center p-4'>
                <div className='flex flex-col items-center w-full md:w-1/2'>
                    <div className='w-full'>
                        <form className="flex flex-col items-center rounded-lg shadow-md p-2 w-full">
                            <input className="border-b-2 border-gray-400 w-full p-2 mb-4 focus:outline-none focus:border-green-700" type="question" placeholder="question" />
                            
                            <textarea className="border-b-2 border-gray-400 w-full p-2 mb-4 focus:outline-none focus:border-green-700" placeholder='Details...' rows={5} cols={50}>
                            </textarea>

                            <button className="bg-green-700 hover:bg-green-600 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline w-4/5 mb-4" type="button">Send</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ContactUs;
