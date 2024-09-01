import { Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  SignUp,
  Admin,
  Chart,
  User,
  Vendor,
  Staff,
  DeliveryBoy,
  Transaction,
  FourButton,
  Discount,
} from "./App.js";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/user" element={<User />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/button" element={<FourButton />} />
        <Route path="/deliveryBoy" element={<DeliveryBoy />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/discount" element={<Discount />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
