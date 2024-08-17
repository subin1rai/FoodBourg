// import NavbarLogin from "./components/NavbarLogin";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Admin from "./Admin/Admin.jsx"
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    < div>
    <Routes>
      <Route  path='/' element= {<LoginPage />} />
      <Route  path='/signUp' element= {<SignUp/>} />
      <Route  path='/admin' element= {<Admin/>} />
      <Route  path='/*' element= {<Navigate to='/'/>} />
    </Routes>
    </div>
  )
}