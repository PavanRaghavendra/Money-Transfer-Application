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
              <div className="flex justify-center items-center md:flex-row flex-col h-full p-5">
          <p className="text-gray-500 md:text-6xl md:p-4 md:w-1/2 text-3xl p-5 w-1/2">Pai Payments</p>
          <Lottie lottieRef={phone} animationData={animation} className="w-1/2"></Lottie>
      </div>
    </div>
    </>
}