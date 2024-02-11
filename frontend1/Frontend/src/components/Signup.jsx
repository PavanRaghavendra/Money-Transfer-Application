import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <p className="text-center text-2xl pt-3 font-bold">Sign Up</p>
            <p className="text-center">Enter your information to create an <br></br>account</p>
            <p className="text-left pb-1 font-semibold">First Name</p>
                <input onChange={(e)=>
                {
                    setFirstname(e.target.value);
                }}placeholder="John" className=" rounded-sm w-full pl-2 pt-2 pb-1 border-black-500"></input>
                <p className="text-left pb-1 font-semibold">Last Name</p>
                <input  onChange={(e)=>
                {
                    setLastname(e.target.value);
                }} placeholder="Doe" className="border-rose-200 rounded-sm w-full pl-2 pt-2 pb-1"></input>
                <p className="text-left pb-1 font-semibold">Email</p>
                <input  onChange={(e)=>
                {
                    setusername(e.target.value);
                }}placeholder="johndoe@example.com" className="border-rose-200 rounded-sm w-full pl-2 pt-2 pb-1"></input>
                <p className="text-left pb-1 font-semibold">Password</p>
                <input  onChange={(e)=>
                {
                    setPassword(e.target.value);
                }}placeholder="" className="border-rose-200 rounded-sm w-full pl-2 pt-2 pb-1"></input>
                <button onClick={ async ()=>
                {
                    const response=await axios.post("https://money-wallet-api.vercel.app/api/user/Signup",{
                            firstname,
                            lastname,
                            username,
                            password
                        }
                    )
                    localStorage.setItem("token",response.data.token);
                    navigate('/dashboard')
                }}type="button" className="my-2 text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">Sign Up</button>
               <div className="flex justify-center mb-4 mt-2">
                <p className="">Already have an account?</p>
                <Link to={"/Signin"} className="underline cursor-pointer">Login</Link>
                </div>
            </div>
        </div>
    </div>
    </>
}