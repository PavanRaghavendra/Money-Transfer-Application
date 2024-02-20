import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { backurl } from '../../url';
export function Signup()
{
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [username,setusername]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    return <>
    <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-babypink w-80 text-center p-2 h-max px-4">
            <p className="text-center text-2xl pt-3 font-bold">Sign Up</p>
            <p className="text-center">Enter your information to create an <br></br>account</p>
            <p className="text-left pb-1 font-semibold">First Name</p>
                <input onChange={(e)=>
                {
                    setFirstname(e.target.value);
                }}placeholder="John" className=" rounded-sm w-full pl-2 pt-2 pb-1 border border-black-500"></input>
                <p className="text-left pb-1 font-semibold">Last Name</p>
                <input  onChange={(e)=>
                {
                    setLastname(e.target.value);
                }} placeholder="Doe" className="border border-black-500 rounded-sm w-full pl-2 pt-2 pb-1"></input>
                <p className="text-left pb-1 font-semibold">Email</p>
                <input  onChange={(e)=>
                {
                    setusername(e.target.value);
                }}placeholder="johndoe@example.com" className="border border-black-500 rounded-sm w-full pl-2 pt-2 pb-1"></input>
                <p className="text-left pb-1 font-semibold">Password</p>
                <input  onChange={(e)=>
                {
                    setPassword(e.target.value);
                }}placeholder="" className="border border-black-500 rounded-sm w-full pl-2 pt-2 pb-1"></input>
                <button onClick={ async ()=>
                {
                    const response=await axios.post(`${backurl}/api/user/Signup`,{
                            firstname,
                            lastname,
                            username,
                            password
                        }
                    )
                    localStorage.setItem("token",response.data.token);
                    navigate('/dashboard')
                }}type="button" className="bg-third my-2 text-white bg-gray-800 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-full">Sign Up</button>
               <div className="flex justify-center mb-4 mt-2">
                <p className="">Already have an account?</p>
                <Link to={"/Signin"} className="underline cursor-pointer text-third font-bold">Login</Link>
                </div>
            </div>
        </div>
    </div>
    </>
}