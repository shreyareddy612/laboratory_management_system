import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../images/person.png";
import account from "../images/test-account.png"

import http from "../http-common";


const Profile = ({ user = JSON.parse(localStorage.getItem("user")) }) => {
    const [profileData, setProfileData] = useState({});
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [formData, setFormData] = useState({
        description: "",
        sex: "",
        disabled: "",
        marital_status: "",
        children: 0,
        blood_group: "",
        work_at: "",
        work: "",
        next_of_kin: "",
        next_of_kin_rel: "",
        next_of_kin_contact: ""
    });
    const navigate = useNavigate();
    const handleFormChange = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value, 
            user_id: user.id
        }));
    }

    const handleSave = async (event) => {
        try {
            const profile = await http.post(`/profile/createProfile/${user.id}`, formData);
            console.log("Saved");
            navigate("/profile/" + user.id)
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async (event) => {
        try {
            const profile = await http.put(`/profile/updateProfile/${user.id}`, formData);
            navigate("/profile/" + user.id)
        } catch (error) {
            console.log(error);
        }
    }

    const showProfile = () => {
        setIsProfileVisible(!isProfileVisible);
    };

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
     * @param {*} user user object
     * @returns true if exists or false if not exist
     */
    const isLoggedIn = (user) => {
        if (user) {
            return true
        }
        return false
    }

    /**
     * @description Gets profile object
     */
    const getUserProfile = async () => {
        try {
            const profile = await http.get(`/profile/getProfileById/${user.id}`);
            console.log(profile);
            setProfileData(profile.data.userProfile);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUserProfile();
    }, [profileData])

    const logout = () => {localStorage.clear()};

    const checkStaff = isStaff(user);
    const loggedIn = isLoggedIn(user);

    const showEditForm = profileData === null;

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
                            </span>{user.name}
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
                                <div>
                                    <Link 
                                    to="/patients"
                                    className="link-nav-btn-underline-full-width">
                                        Patients
                                    </Link>
                                    <Link 
                                    to={`/staff/${user.id}`}
                                    className="link-nav-btn-underline-full-width">
                                        Staffs
                                    </Link>
                                </div>
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
                        Welcome Again {user.name}!
                    </h2>
                    
                    {
                        (
                            showEditForm ? (
                                <form className="flex flex-col">
                                    {/* Edit Personal Info */}
                                    <section className="flex flex-col p-2 sm:flex-row">
                                        <div className="w-full border rounded-md p-1 m-1 sm:w-1/2">
                                            <h2 className="h2 border-b-2 mb-1"> Edit Personal Data </h2>
                                            <div className="label-row">
                                                <textarea className="p-1" type="text" name="description" placeholder="Description..." cols={100} rows={5} onChange={handleFormChange}></textarea>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Sex:
                                                </span>
                                                <select name="sex" onChange={handleFormChange}>
                                                    <option value="" disabled>Choose Sex</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Disability:
                                                </span>
                                                <select name="disabled" onChange={handleFormChange}>
                                                    <option value="" disabled>Choose Disability</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Marital Status:
                                                </span>
                                                <select name="marital_status" onChange={handleFormChange}>
                                                    <option value="" disabled>Marital Status</option>
                                                    <option value="Married">Married</option>
                                                    <option value="Single">Single</option>
                                                    <option value="Separated">Separated</option>
                                                    <option value="Divorced">Divorced</option>
                                                </select>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Number of Children:
                                                </span>
                                                <input className="w-7 p-1" type="text" name="children" onChange={handleFormChange}/>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Blood Group:
                                                </span>
                                                <select name="blood_group" onChange={handleFormChange}>
                                                    <option value="" disabled>Blood Group</option>
                                                    <option value="A">A</option>
                                                    <option value="AB">AB</option>
                                                    <option value="B">B</option>
                                                    <option value="O">O</option>
                                                    <option value="I don't Know">I don't Know</option>
                                                </select>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Work At: 
                                                </span>
                                                <input className="p-1" type="text" placeholder="e.g Google" name="work_at" onChange={handleFormChange}/>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Profession:
                                                </span>
                                                <input className="p-1" type="text" placeholder="e.g Software Engineer" name="work" onChange={handleFormChange}/>
                                            </div>
                                        </div>
                                        {/* Next of Kin */}
                                        <div className="w-full border rounded-md p-1 m-1 sm:w-1/2">
                                            <h2 className="h2 border-b-2 mb-1"> Edit Next of Kin</h2>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Name:
                                                </span>
                                                <input className="p-1" type="text" placeholder="e.g Jane Doe" name="next_of_kin" onChange={handleFormChange}/>
                                            </div>
                                            <div className="label-row">                            
                                                <span className="flex font-bold">
                                                    Relationship:
                                                </span>
                                                <select name="next_of_kin_rel" onChange={handleFormChange}>
                                                    <option value="" disabled>Relationship</option>
                                                    <option value="Spouse">Spouse</option>
                                                    <option value="Sibling">Sibling</option>
                                                    <option value="Relative">Relative</option>
                                                    <option value="Friend">Friend</option>
                                                </select>
                                            </div>
                                            <div className="label-row">                           
                                                <span className="flex font-bold">
                                                    Contact:
                                                </span>
                                                <input className="p-1" type="text" placeholder="e.g +254 7xxxxxxxx" name="next_of_kin_contact" onChange={handleFormChange}/>
                                            </div>                                            
                                        </div>
                                    </section>
                                    <div className="label-row justify-end"> 
                                        <input
                                            className="link-nav-btn"
                                            type="submit"
                                            value={profileData ? "Update" : "Save"} // Change button text based on profileData
                                            onClick={!profileData ? handleSave: handleUpdate}
                                        />
                                    </div>
                                </form>  
                            ) : (
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
                                                </span>{profileData.next_of_kin}
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
                            )
                        )                        
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
                            </span>{user.name}
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
