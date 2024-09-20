import "./App.scss";
import Login from "./page/Login/Login";
import Auth from "./page/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import EmailVerification from "./components/vertivikatsiya/Vertivikatsiya";
import Admin from "./page/Admin/Admin";
import Dashboard from "./page/Admin/Dashboard/Dashboard";
import ManageProducts from "./page/Admin/manage-product/ManageProducts";
import CreateProduct from "./page/Admin/create-product/CreateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/vertivikatsia" element={<EmailVerification />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path='manage' element={<ManageProducts/>}/>
            <Route path="create" element ={<CreateProduct/>}/>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
