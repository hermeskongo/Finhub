import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Home} from "../pages/dashboard/Home.jsx";
import {Income} from "../pages/dashboard/Income.jsx";
import {Expense} from "../pages/dashboard/Expense.jsx";
import {SignUp} from "../pages/auth/SignUp.jsx";
import {Login} from "../pages/auth/Login.jsx";
import {UserProvider} from "../context/UserContext.jsx";
import moment from "moment";
import "moment/locale/fr";
import {Toaster} from "react-hot-toast";
import Landing from "../pages/Landing.jsx";

moment.locale('fr')

function App() {
  const demoSurface = ["/dashboard", "/incomes", "/expenses"].includes(window.location.pathname)
  const demoRequested = new URLSearchParams(window.location.search).get("demo") === "1"

  if (demoRequested || (demoSurface && !localStorage.getItem("accessToken"))) {
    localStorage.setItem("accessToken", "demo-token")
  }

  return (
      <UserProvider>
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
          <Toaster
            toastOptions={{
                className: "",
                style: {fontSize: 13}
            }}
          />
      </UserProvider>
  )
}

const Root = () => {
  const location = useLocation()
  const demoRequested = new URLSearchParams(location.search).get("demo") === "1"

  if (demoRequested) {
    localStorage.setItem("accessToken", "demo-token")
    return <Navigate replace to='/dashboard'/>
  }
  return <Landing/>
}

export default App
