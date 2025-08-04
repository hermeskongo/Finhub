import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../pages/dashboard/Home.jsx";
import {Income} from "../pages/dashboard/Income.jsx";
import {Expense} from "../pages/dashboard/Expense.jsx";
import {SignUp} from "../pages/auth/SignUp.jsx";
import {Login} from "../pages/auth/Login.jsx";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/dashboard" element={<Home/>}></Route>
            <Route path="/incomes" element={<Income/>}></Route>
            <Route path="/expenses" element={<Expense/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token")
  return isAuthenticated ? (<Navigate to='/dashboard'/>) : (<Navigate to="/login"/>)
}

export default App

