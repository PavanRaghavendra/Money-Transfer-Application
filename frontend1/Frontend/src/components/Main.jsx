import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import animation from './phone.json'
import { useRef } from "react";
import { Card } from "./Card";
import { Footer } from "./footer";
export function Main()
{
    const phone=useRef(null);
    return <>
    <div className="bg-babypink h-screen">
    <div className="bg-babypink flex flex-col h-fit">
        <div className="bg-second flex justify-between ">
            <p className="text-2xl text-babypink p-3 ">Pai-Payments</p>
            <div className="text-xl flex gap-4 p-4">
            <Link to={"/Signin"} className="text-babypink hover:text-third transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-100">Login</Link>
            <Link to={"/Signup"} className="text-babypink hover:text-third transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-100">Signup</Link>
            </div>
    </div>
    <div className="bg-second flex flex-col sm:flex-row">
        <div className="flex flex-col md:w-1/2 md:justify-center md:flex-end">
       <div className="text-babypink p-7 text-2xl font-bold md:text-4xl ">To ensure secure transactions, <br></br>consider using reputable <br></br>payment processors like Pai-Payments</div>
       <div className="bg-third ml-6 mb-6 w-5 h-1"></div>
       <div className="text-babypink text-md p-6 text-md font-semibold md:text-xl">An Authorised Payment Aggregator,<br></br> we ensure your transactions are secure.</div>
       <div className="m-5 border border-third bg-third w-28 h-100% text-center flex justify-center items-center">
       <Link to={"/Signup"} className="text-babypink font-bold text-xl">Signup</Link>
       <div className="text-babypink">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</div>
       </div>
       </div>
        <div className="flex justify-center md:w-1/2 md:h-1/3 md:mr-10 md:mb-4">
            <img src="./dWebOld.png"></img>
       </div>
    </div>
    </div>
    <div>
        <div><p className="text-second font-bold m-4 text-center text-4xl">New in the <span className="text-third">Pai-Pay</span> Product Suite</p></div>
       
       <Card/>
       <Footer/>
    </div>
    </div>
    </>
}
