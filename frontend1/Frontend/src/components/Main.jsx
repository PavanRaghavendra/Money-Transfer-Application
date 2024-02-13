import { Link } from "react-router-dom";
export function Main()
{
    return <>
    <div className="bg-white-900 flex flex-col h-screen">
        <div className="bg-blue-500 flex justify-between ">
            <p className="text-2xl text-white p-3">Payment-app</p>
            <div className="text-xl flex gap-4 p-4">
            <Link to={"/Signin"} className="text-white">Login</Link>
            <Link to={"/Signup"} className="text-white">Signup</Link>
            </div>
        </div>
        <div className="flex justify-center items-center h-full">
        <p className="text-blue-500 text-5xl text-center ">Welcome to Money Transfer website</p>
        </div>
    </div>
    </>
}