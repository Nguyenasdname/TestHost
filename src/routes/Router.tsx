import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import GuitarPage from "../pages/GuitarPage"
const AppRouter = () => {
    const RedirectToFacebook = () => {
        window.location.href = 'https://www.facebook.com/Nameasdl'
        return null;
    }
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/facebook" element={<RedirectToFacebook />} />
            <Route path="/guitar-page" element={<GuitarPage />} />
        </Routes>
    )
}

export default AppRouter