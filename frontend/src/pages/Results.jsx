import React from 'react';


const Results = () => {
    return (
        <div className='flex flex-col items-center h-4/5 bg-teal-50 p-auto'>
            <div className='flex flex-col m-3 md:flex-row'>
                <div className='w-full border mr-3 md:w-1/2'>
                    <h1 className="text-center text-green-700 text-2xl">Waiting</h1>

                    {/* SEARCH BOX */}
                    {/* <form className='flex flex-row' action="">
                        <input className='p-2' type="text" placeholder='Patient Name' name='patientname'/>

                        <input className='bg-green-700 p-2 text-white' type="button" value="Search" />
                    </form> */}

                    {/* LIST/ARRAY OF PENDING TESTS */}
                    <div className='flex flex-col justify-center border items-center p-2 mt-3'>
                        {/* START SINGLE TEST CARD */}
                        <div className='p-2 border m-2'>
                            <h2>Name: <span className='text-green-700' id='patientname'>Mbithi Charles</span></h2>

                            <h2>Test: <span className='text-green-700' id='testfor'>Malaria test</span></h2>

                            <h2>Booking No: <span className='text-green-700' id='patientname'>bk100</span></h2>
                        </div>
                        {/* START SINGLE TEST CARD */}

                        {/* START SINGLE TEST CARD */}
                        <div className='p-2 border m-2'>
                            <h2>Name: <span className='text-green-700' id='patientname'>Jane Doe</span></h2>

                            <h2>Test: <span className='text-green-700' id='testfor'>Amoeba</span></h2>

                            <h2>Booking No: <span className='text-green-700' id='patientname'>bk101</span></h2>
                        </div>
                        {/* START SINGLE TEST CARD */}

                    </div>
                </div>
                <div className='w-full border ml-3 md:w-1/2'>
                    <h1 className="text-center text-green-700 text-2xl mb-4">Results</h1>
                    <form className='flex flex-col p-2' action="">
                        <input className='m-2 p-2 w-4/5 border-b-2' type="text" placeholder='Test No' name='test_no' />

                        <select class="block appearance-none w-4/5 bg-white border border-gray-200 text-gray-700 m-2 p-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='test_resuts'>
                            <option value="" disabled selected>Select Results</option>
                            <option value="positive">Positive</option>
                            <option value="negative">Negative</option>
                        </select>

                        <div className='flex justify-end w-4/5'>
                            <input className='bg-green-700 text-white p-2 w-1/2 rounded-md' type="button" value="Save" />
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Results;
