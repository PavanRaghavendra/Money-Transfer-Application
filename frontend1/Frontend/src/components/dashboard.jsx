import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export function Dashboard()
{
   return <>
   <Appbar></Appbar>
   <Balance></Balance>
   <Users></Users>
   </>
}
function Appbar()
{
    const navigate=useNavigate();
    return <div className="shadow h-14 flex justify-between">
    <div className="flex flex-col justify-center h-full ml-4">
      <Link to="/dashboard">PayTM App</Link>
    </div>
    <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">
            Hello,User
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                U
            </div>
        </div>
        <div className='flex justify-center items-center gap-3'>
            <button className='bg-gray-500 text-white text-lg rounded-sm' onClick={()=>navigate("/signup")}>SignUp</button>
            <button className='bg-yellow-500 text-lg text-white rounded-sm' onClick={()=>navigate("/Signin")}>SignIn</button>
        </div>
    </div>
</div>
}
function Balance()
{
    const [balance,setbalance]=useState("");
    useEffect(()=>
    {
        async function balance()
        {
            const response=await axios.get("http://localhost:3001/api/accountdata/balance",
            {
                headers:
                {
                    authorization:localStorage.getItem("token")
                }
            })
            setbalance(response.data.balance);
        }
        balance();
    },[])
    return <div className="flex flex-row h-20 justify-center items-center shadow-md">
        <div className="ml-3 font-semibold">
            Your Balance
        </div>
        <div className="font-semibold ml-4">
            {balance}
        </div>
    </div>
}
function Users()
{
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=>
    {
        async function fetch()
        {
            const response=await axios.get("http://localhost:3001/api/user/bulk?filter="+filter);
            setUsers(response.data.users);
        }
        fetch();
    },[filter]);
    return <>
       <div className="font-bold mt-6 text-lg">
            users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
        {users.map(user => <User key={user._id} user={user} />)}
        </div>
        
    </>
}

function User({key,user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
            <button onClick={() => {
                navigate("/Sendmoney?id=" + user._id + "&name=" + user.firstname);
            }}>Send Money</button>
        </div>
    </div>
}