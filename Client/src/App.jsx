import NavbarLogin from "./components/NavbarLogin";
import LoginPage from "./Pages/LoginPage";
import Signup from "./Pages/SignUp/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    < div>
    <Routes>
      <Route  path='/' element= {<LoginPage />} />
      <Route  path='/signup' element= {<Signup/>} />
      <Route  path='/*' element= {<Navigate to='/'/>} />
      {/* <Route  path='/signUp' element= {<Signup/>} /> */}
    </Routes>
    </div>
  )
}