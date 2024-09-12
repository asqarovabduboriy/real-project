import "./App.scss";
import Login from "./page/Login/Login";
import Auth from "./page/Auth/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import EmailVerification from "./components/vertivikatsiya/Vertivikatsiya";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/vertivikatsia" element={<EmailVerification/>}/>
        <Route path="/" element={<Auth />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
