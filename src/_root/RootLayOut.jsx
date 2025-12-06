import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer2nd from "../components/Footer2nd"

function RootLayOut() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer2nd />
        </div>
    )
}

export default RootLayOut
