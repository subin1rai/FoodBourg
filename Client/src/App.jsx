// import NavbarLogin from "./components/NavBarLogin.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Admin from "./Admin/Admin.jsx"
import { Navigate, Route, Routes } from "react-router-dom";
import Visual from "./Admin/components/Content.jsx";
import Chart from "./Admin/components/Chart.jsx";
import User from "./Admin/pages/User.jsx";

export default function App() {
  return (
    < div>
    <Routes>
      <Route  path='/' element= {<LoginPage />} />
      <Route  path='/signUp' element= {<SignUp/>} />
      <Route  path='/admin' element= {<Admin/>} />
      <Route  path='/visual' element= {<Visual/>} />
      <Route  path='/chart' element= {<Chart/>} />
      <Route  path='/user' element= {<User/>} />
      <Route  path='/*' element= {<Navigate to='/'/>} />
    </Routes>
    </div>
  )
}