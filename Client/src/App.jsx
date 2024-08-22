// import NavbarLogin from "./components/NavBarLogin.jsx";
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Admin from "./Admin/Admin.jsx"
import { Navigate, Route, Routes } from "react-router-dom";
import Visual from "./Admin/components/Content.jsx";
import Chart from "./Admin/components/Chart.jsx";
import User from "./Admin/pages/User.jsx";
import Vendor from "./Admin/pages/Vendor.jsx";
import Staff from "./Admin/pages/Staff.jsx";
import DeliveryBoy from "./Admin/pages/DeliveryBoy.jsx"
import Transaction from "./Admin/pages/Transaction.jsx";

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
      <Route  path='/vendor' element= {<Vendor/>} />
      <Route  path='/staff' element= {<Staff/>} />
      <Route  path='/deliveryBoy' element= {<DeliveryBoy/>} />
      <Route  path='/transaction' element= {<Transaction/>} />
      
      <Route  path='/*' element= {<Navigate to='/'/>} />
    </Routes>
    </div>
  )
}