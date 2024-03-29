import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { backurl } from '../../url';
import {Popup} from "./Popup"
export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigation=useNavigate();
    let timeout;
    return <div className="flex justify-center h-screen bg-gray-100 bg-babypink">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-3xl font-bold text-center text-third">Send Money</h2>
                </div>
                <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-babypink flex items-center justify-center">
                    <span className="text-2xl text-third">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-second">{name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        onChange={(e) => {
                        clearTimeout(timeout);
                          timeout= setTimeout(()=>
                            {
                                setAmount(e.target.value);
                            },1000);
                           
                        }}
                        type="number"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={async () => {
                        try{
                       const response= await axios.post(`${backurl}/api/accountdata/transfer`, {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        if(response.data.message==="Transfer successful")
                        {
                            Popup({title:"success",text:"Transfer successful",icon:"success"});
                            navigation("/dashboard");
                        }
                    }
                        catch(error)
                        {
                            if(error.response)
                            {
                                Popup({title:"error",text:"Transfer Unsuccessful",icon:"error"});
                                navigation("/dashboard");
                            }
                            else if(error.request)
                            {
                                Popup({title:"error",text:"Transfer Unsuccessful",icon:"error"});
                                navigation("/dashboard");
                            }
                            else 
                            {
                                Popup({title:"error",text:"Transfer Unsuccessful",icon:"error"});
                                navigation("/dashboard");
                            }
                        }
                    }} className="justify-center rounded-md text-md font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-second text-third">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}