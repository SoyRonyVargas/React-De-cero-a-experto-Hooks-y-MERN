import MarvelScreen from "../components/Marvel/MarvelScreen"
import SearchScreen from "../components/Search/SearchScreen"
import HeroScreen from "../components/Hero/HeroScreen"
import DcScreen from "../components/DC/DcScreen"
import { Navbar } from "../components/UI/NavBar"
import { Fragment } from "react"
import {
    Routes,
    Route,
} from "react-router-dom"

const DashboardRouter = () => (
    <Fragment>
        <Navbar/>
        <main className="container mt-2">
            <Routes>
                <Route path="/marvel" element={<MarvelScreen />}/ >
                <Route path="/dc" element={<DcScreen />}/ >
                <Route path="/search" element={<SearchScreen />}/ >
                <Route path="/hero/:id" element={<HeroScreen />}/ >
            </Routes>
        </main>
    </Fragment>
)

export default DashboardRouter