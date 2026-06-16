import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Rooms from "./Rooms"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App