import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function AdminDashBoardLayOut() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default AdminDashBoardLayOut
