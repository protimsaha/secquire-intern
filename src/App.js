import { Route, Routes } from "react-router-dom";
import Emplyee from "./components/Emplyee";
import FormControl from "./components/FormControl";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import EmployeeDetail from "./components/EmployeeDetail";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FormControl></FormControl>}></Route>
        <Route path="/employee" element={<Emplyee></Emplyee>}></Route>
        <Route path="/:id" element={<EmployeeDetail />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
