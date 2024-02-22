import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { backurl } from '../../url'
export function Dashboard()
{
   return <>
   <div className='bg-babypink'>
   <Appbar></Appbar>
   <Balance></Balance>
   <Users></Users>
   </div>
   </>
}
function Appbar()
{
    const [user,setuser]=useState("");
    useEffect(()=>{
       async function data()
        {
        const response=await axios.get(`${backurl}/api/user/data`,
        {
            headers:
            {
                authorization:localStorage.getItem("token")
            }
        })
        const name=response.data.name;
        setuser(name);
    }
    data()
    },[])
    return <div className="shadow h-14 flex justify-between bg-babypink">
    <div className="flex flex-col justify-center h-full ml-4">
      <Link to="/dashboard" className='text-third text-xl font-bold'>Pai-Payments</Link>
    </div>
    <div className="flex justify-center items-center">
        <div className="text-xl mr-3">
            Hello,<span className='text-third'>{user}</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-second flex items-center justify-center">
                    <span className="text-2xl text-third">{user[0]}</span>
                    </div>
        <div>
            <Link to={"/"} className='cursor-pointer text-xl ml-2 p-1 rounded-md font-bold text-third underline hover:bg-second'>Logout</Link>
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
            const response=await axios.get(`${backurl}/api/accountdata/balance`,
            {
                headers:
                {
                    authorization:localStorage.getItem("token")
                }
            })
            let data=response.data.balance;
            data=Math.round(data);
            setbalance(data);
        }
        balance();
    },[])
    return <div className="flex h-40 shadow-md   items-center justify-center">
        <div className='w-60 h-20   flex justify-center items-center bg-second text-third rounded-md'>
        <div className="ml-3 font-semibold ">
            Your Balance
        </div>
        <div className="font-semibold ml-4 ">
            Rs.{balance}.00/-
        </div>
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
            const response=await axios.get(`${backurl}/api/user/bulk?filter=`+filter);
            setUsers(response.data.users);
        }
        fetch();
    },[filter]);
    let timeout
    return <>
       <div className="font-bold m-6 text-xl text-center text-third">
            users
        </div>
        <div className="m-2 mb-4 shadow-lg">
            <input onChange={(e) => {
                clearTimeout(timeout);
               timeout= setTimeout(()=>
                {
                    setFilter(e.target.value)
                },1000)
             
            }} type="text" placeholder="Search users..." className="w-full p-3 border rounded-md "></input>
        </div>
        <div>
        {users.map(user => <User key={user._id} user={user} />)}
        </div>
        
    </>
}

function User({key,user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex justify-center items-center gap-2">
            <div className="h-6 w-6 text-center">
                <div className="flex flex-col justify-center h-full text-xl border border-second p-3  items-center text-third  rounded-full">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center text-third border border-second mb-3 rounded-md bg-second p-2">
            <button onClick={() => {
                navigate("/Sendmoney?id=" + user._id + "&name=" + user.firstname);
            }}>Send Money</button>
        </div>
    </div>
}