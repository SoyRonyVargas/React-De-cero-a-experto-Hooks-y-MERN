import LoginScreen from "../components/Login/LoginScreen"
import DashboardRouter from './DashboardRouter'
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import {
    Routes,
    Route,
} from "react-router-dom"

const AppRouter = () => (
    <Routes>
        <Route path="/login" element={
            <PublicRoute>
                <LoginScreen />
            </PublicRoute>
        }/ >
        <Route path="/*" element={
            <PrivateRoute>
                <DashboardRouter/>
            </PrivateRoute>
        }/ >
    </Routes>
)

export default AppRouter