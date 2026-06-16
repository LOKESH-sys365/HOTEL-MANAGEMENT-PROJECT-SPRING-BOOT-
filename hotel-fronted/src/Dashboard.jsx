import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div style={{ background:"#1a1a2e", minHeight:"100vh", color:"white" }}>
      <div style={{ background:"#16213e", padding:"20px", 
                    display:"flex", justifyContent:"space-between",
                    alignItems:"center" }}>
        <h2 style={{ color:"#e94560" }}>🏨 Hotel Management</h2>
        <button onClick={logout}
          style={{ background:"#e94560", color:"white", 
                   border:"none", padding:"10px 20px",
                   borderRadius:"5px", cursor:"pointer" }}>
          Logout
        </button>
      </div>

      <div style={{ padding:"30px", display:"grid", 
                    gridTemplateColumns:"repeat(3, 1fr)", gap:"20px" }}>
        <div onClick={() => navigate("/rooms")}
          style={{ background:"#16213e", padding:"30px", 
                   borderRadius:"10px", textAlign:"center",
                   cursor:"pointer", border:"2px solid #e94560" }}>
          <h2>🛏️</h2>
          <h3>Rooms</h3>
          <p>Manage hotel rooms</p>
        </div>

        <div onClick={() => navigate("/customers")}
          style={{ background:"#16213e", padding:"30px",
                   borderRadius:"10px", textAlign:"center",
                   cursor:"pointer", border:"2px solid #0f3460" }}>
          <h2>👥</h2>
          <h3>Customers</h3>
          <p>Manage customers</p>
        </div>

        <div onClick={() => navigate("/bookings")}
          style={{ background:"#16213e", padding:"30px",
                   borderRadius:"10px", textAlign:"center",
                   cursor:"pointer", border:"2px solid #0f3460" }}>
          <h2>📋</h2>
          <h3>Bookings</h3>
          <p>Manage bookings</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard