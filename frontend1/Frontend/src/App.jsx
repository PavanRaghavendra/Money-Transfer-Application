import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Signup } from "./components/Signup"
import { Dashboard } from "./components/dashboard"
import { Signin } from "./components/Signin"
import { SendMoney } from "./components/Sendmoney"
import { Main } from "./components/Main"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/Signin" element={<Signin/>}></Route>
         <Route path="/Sendmoney" element={<SendMoney></SendMoney>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
