import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import animation from './phone.json'
import { useRef } from "react";
export function Main()
{
    const phone=useRef(null);
    return <>
    <div className="bg-white-900 flex flex-col h-screen">
        <div className="bg-gray-500 flex justify-between ">
            <p className="text-2xl text-white p-3">Pai-Payments</p>
            <div className="text-xl flex gap-4 p-4">
            <Link to={"/Signin"} className="text-white">Login</Link>
            <Link to={"/Signup"} className="text-white">Signup</Link>
            </div>
        </div>
        <div className="flex justify-center items-center flex-row h-full p-5 sm:flex-row">
            <div className="flex flex-col">
            <p className="text-gray-500 text-6xl p-4">Pai Payments</p>
        </div>
        <Lottie  lottieRef={phone}animationData={animation}></Lottie>
        </div>
    </div>
    </>
}