import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectedRoute.jsx";
import { LayoutLoader } from "./components/layout/Loader";
import { Toaster } from "react-hot-toast";
import Header from './components/common/Header.jsx'; // Import the Header component

const Home = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/LoginPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const HotelDetailPage = lazy(() => import("./pages/HotelDetailPage"));
const UserProfile = lazy(() => import("./pages/UserProfilePage"));
const AllHotels = lazy(() => import("./pages/AllHotelsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
    const [user, setUser] = useState({ name: "User" });
    const [loading, setLoading] = useState(true);

    // Check authentication status (simulated for this example)
    useEffect(() => {
        // Simulated API call for user authentication
        // const isLoggedIn = Boolean(document.cookie.includes('yourAuthCookieName'));
        const isLoggedIn = true;
        // setUser(isLoggedIn ? { name: "User" } : null); // Mock user data
        setLoading(false);
    }, []);

    const handleLoginClick = () => {
        // Logic to navigate to the login page
        // For example: navigate('/login');
        console.log('Login Clicked');
    };

    const handleRegisterClick = () => {
        // Logic to navigate to the register page
        // For example: navigate('/register');
        console.log('Register Clicked');
    };

    return (
        <BrowserRouter>
            <Header 
                user={user} 
                onLoginClick={handleLoginClick} 
                onRegisterClick={handleRegisterClick} 
            />
            <Suspense fallback={<LayoutLoader />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectRoute user={user}>
                                <Home />
                            </ProtectRoute>
                        }
                    />
                    <Route
                        path="/hotel/:id"
                        element={
                            <ProtectRoute user={user}>
                                <HotelDetailPage />
                            </ProtectRoute>
                        }
                    />
                    <Route
                        path="profile"
                        element={
                            <ProtectRoute user={user}>
                                <UserProfile />
                            </ProtectRoute>
                        }
                    />
                    <Route
                        path="/bookedhotels"
                        element={
                            <ProtectRoute user={user}>
                                <AllHotels />
                            </ProtectRoute>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <ProtectRoute user={!user} redirect="/">
                                <LoginPage />
                            </ProtectRoute>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Toaster position="bottom-center" />
        </BrowserRouter>
    );
}

export default App;
