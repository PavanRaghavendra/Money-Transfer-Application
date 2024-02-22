import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backurl } from "../../url";
import { Popup } from "./Popup";
export function Signin()
{
    const [username,setusername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return <>
    <div className=" bg-slate-500 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className=" bg-babypink w-80 h-max rounded-md p-2 text-center px-4">
            <p className="text-2xl font-bold ">Sign in</p>
            <p className="text-center">Enter your credintals to access your <br></br>account</p>
           <form className="flex flex-col pb-3">
            <label className="text-left pt-2 pb- pl-1 font-semibold">
                Email
            </label>
            <input onChange={(e)=>
            {
                setusername(e.target.value);
            }} id="email"placeholder="jondoe@example.com" className="rounded-sm p-2 broder-black-500 w-full hover:bg-slate-400"/>
            <label className="text-left pt-2 pb-1 pl-1 font-semibold">Password</label>
            <input onChange={(e)=>
            {
                setPassword(e.target.value);
            }}className="rounded-sm p-2  broder-black-500 w-full hover:bg-slate-400"></input>
            </form>
            <button  onClick={async ()=>
            {
                try{
                const response=await axios.post(`${backurl}/api/user/Signin`,
                {
                    username,
                    password
                });
                localStorage.setItem("token",response.data.token);
                Popup({title:"Success",text:"Signin Successfully",icon:"success"});
                navigate("/dashboard");
            }
            catch(error)
            {
                if(error.response)
                {
                    Popup({title:"error",text:"Enter Valid Credentials",icon:"error"});
                }
                else if(error.request)
                {
                    Popup({title:"error",text:"Enter Valid Credentials",icon:"error"});
                }
                else{
                    Popup({title:"error",text:"Enter Valid Credentials",icon:"error"});
                }
            }
            }}className="bg-third text-babypink w-full rounded-md p-2 font-semibold text-xl shadow-xl">Sign in</button>
            <div className="flex flex-row justify-center mb-4 mt-2">
            <p>Don't have an account?</p>
            <Link to="/Signup" className="underline cursor-pointer">Signup</Link>
            </div>
        </div>
        </div>
    </div>
    </>
}