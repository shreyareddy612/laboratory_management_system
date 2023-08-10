import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/person.png";
import account from "../images/test-account.png"


const Profile = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const [isProfileVisible, setIsProfileVisible] = useState(false);

    const showProfile = () => {
        setIsProfileVisible(!isProfileVisible);
    };

    const user = {
            "_id" : "64c2b1c1489a36a3ab1de20e",
            "full_name" : "Charles Mbithi",
            "email" : "mbithicharlse@gmail.com",
            "designation" : "patient",
            "phone" : "0792907708"
        }
    
    const profileData = {
            id: "64c2b1c1489a36a3ab1de20e",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "sex": "Male",
            medical_history: "None",
            disable: "No",
            marital_status: "Married",
            children: 3,
            blood_group: "B+",
            work_at: "Soft Heart Health Center",
            work: "Neurosergeon",
            next_kin: "Manono Muno",
            next_of_kin_rel: "Aunt",
            next_of_kin_contact: "076rr8372xx"
        }

    /**
     * @description Checks if user is staff
     * @param {*} user Object
     * @returns true if user else false
     */
    const isStaff = (user) => {
        if (user.designation === "staff") {
            return true;
        }

        return false
    }

    /**
     * @description Check if logged in
     * @param {*} userData user object
     * @returns true if exists or false if not exist
     */

    const isLoggedIn = (user) => {
        if (user) {
            return true
        }
        return false
    }

    const logout = () => {localStorage.clear()};

    const checkStaff = isStaff(user);
    const loggedIn = isLoggedIn(userData);

    return (
        <section className='flex flex-col min-h-full bg-teal-50'>
            {/* Menu */}
            <Link
                className="flex flex-col border justify-evenly items-center rounded-full p-1 h-9 w-9 absolute z-20 lg:hidden"
                onClick={showProfile}
                >
                    <img src={account} alt={user.full_name} />
                {/* <span className="bg-green-700 h-1 w-7 rounded">-</span>
                <span className="bg-green-700 h-1 w-7 rounded">-</span>
                <span className="bg-green-700 h-1 w-7 rounded">-</span> */}
            </Link>
            <div className="flex flex-col sm:flex-row">
                {/* PROFILE SIDE BAR */}
                <div
                    className="flex-col max-h-max w-full items-center border shadow-lg p-2 m-1 sm:w-1/3 hidden sm:flex md"
                    >
                    {/* Profile Photo */}
                    <div className="flex justify-center">
                        <div className="cirular-image mb-2">
                            <img src={ profile } alt="Profile" />
                        </div>
                    </div>
                    {/* PersonalInfo */}
                    <div className="flex flex-col border-t-2 border-b-2">
                        <div className="flex row p-2">
                            <span className="flex font-bold pr-2">
                                Name:
                            </span>{user.full_name}
                        </div>
                        <div className="flex row p-2">
                            <span className="font-bold pr-2">
                                Email:
                            </span>{user.email}
                        </div>
                        <div className="flex row p-2">
                            <span className="font-bold pr-2">
                                Phone:
                            </span>{user.phone}
                        </div>
                        <div className="flex justify-center">
                            <Link className="link-nav-btn">
                                Update
                            </Link>  
                        </div>                                  
                    </div>

                    <hr className="mt-2 mb-2"/>
                    
                    {/* Navigate to other pages */}
                    <div className="flex flex-col">
                        {
                            (checkStaff ? (
                                <Link 
                                to="/patients"
                                className="link-nav-btn-underline-full-width">
                                    Patients
                                </Link>
                            ) : (
                                <Link 
                                to="/test-booking"
                                className="link-nav-btn-underline-full-width">
                                    BookTest
                                </Link>
                            ))
                        }

                        {
                            (
                                loggedIn ? (
                                    <Link 
                                    to="/login"
                                    onClick={logout}
                                    className="link-nav-btn-underline-full-width">
                                        Logout
                                    </Link>
                                ) : (
                                    <Link 
                                    to="/login"
                                    className="link-nav-btn-underline-full-width">
                                        Login
                                    </Link>
                                )
                            )
                        }

                    </div>
                </div>

                {/* Other Details */}
                <div className="flex flex-col p-2 w-full border shadow-lg m-1 sm:w-2/3">
                    {/* Welcome */}
                    <h2 className="h2 mb-1">
                        Welcome Again {user.full_name}!
                    </h2>
                    
                    {
                        <div className="border rounded-lg p-2">
                            <div className="flex flex-col p-1 m-1">                            
                                <span className="flex border-b-2 font-bold">
                                    Description:
                                </span>{profileData.description}
                            </div>
                            <section className="flex flex-col p-2 sm:flex-row">
                                {/* Personal Details */}
                                <div className="w-full border rounded-md p-1 m-1 sm:w-1/2">
                                    <h2 className="h2 border-b-2 mb-1"> Personal Information</h2>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Sex:
                                        </span>{profileData.sex}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Medical Condition:
                                        </span>{profileData.medical_history}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Marital Status:
                                        </span>{profileData.marital_status}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Number of Children:
                                        </span>{profileData.children}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Blood Group:
                                        </span>{profileData.blood_group}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Work At: 
                                        </span>{profileData.work_at}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Profession:
                                        </span>{profileData.work}
                                    </div>
                                </div>
                                {/* Next of Kin */}
                                <div className="w-full border rounded-md p-1 m-1 sm:w-1/2">
                                    <h2 className="h2 border-b-2 mb-1"> Next of Kin</h2>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Name:
                                        </span>{profileData.next_kin}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Relationship:
                                        </span>{profileData.next_of_kin_rel}
                                    </div>
                                    <div className="label-row">                            
                                        <span className="flex font-bold">
                                            Contact:
                                        </span>{profileData.next_of_kin_contact}
                                    </div>
                                </div>
                            </section>          
                        </div>
                    }
                </div>
                
                {/* Profile Small Screens */}
                <div
                    className={`flex-col max-h-max bg-white w-full items-center border shadow-lg p-2 m-1 sm:w-1/3 ${
                        isProfileVisible ? "block" : "hidden lg:hidden"
                      } absolute z-10`}
                    >
                    {/* Profile Photo */}
                    <div className="flex justify-center">
                        <div className="cirular-image mb-2">
                            <img src={ profile } alt="Profile" />
                        </div>
                    </div>
                    {/* PersonalInfo */}
                    <div className="flex flex-col border-t-2 border-b-2">
                        <div className="flex row p-2">
                            <span className="flex font-bold pr-2">
                                Name:
                            </span>{user.full_name}
                        </div>
                        <div className="flex row p-2">
                            <span className="font-bold pr-2">
                                Email:
                            </span>{user.email}
                        </div>
                        <div className="flex row p-2">
                            <span className="font-bold pr-2">
                                Phone:
                            </span>{user.phone}
                        </div>
                        <div className="flex justify-center">
                            <Link className="link-nav-btn">
                                Update
                            </Link>  
                        </div>                                  
                    </div>

                    <hr className="mt-2 mb-2"/>
                    
                    {/* Navigate to other pages */}
                    <div className="flex flex-col">
                        {
                            (checkStaff ? (
                                <Link 
                                to="/patients"
                                className="link-nav-btn-underline-full-width">
                                    Patients
                                </Link>
                            ) : (
                                <Link 
                                to="/test-booking"
                                className="link-nav-btn-underline-full-width">
                                    BookTest
                                </Link>
                            ))
                        }

                        {
                            (
                                loggedIn ? (
                                    <Link 
                                    to="/login"
                                    onClick={logout}
                                    className="link-nav-btn-underline-full-width">
                                        Logout
                                    </Link>
                                ) : (
                                    <Link 
                                    to="/login"
                                    className="link-nav-btn-underline-full-width">
                                        Login
                                    </Link>
                                )
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    )

}

export default Profile;
