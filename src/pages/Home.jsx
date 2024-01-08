import React from 'react'
import Sidebar from '../components/Sidebar'
import { useLocation } from "react-router-dom";


const Home = () => {
    const location = useLocation();

    return (
        <div className="container">
            <Sidebar />
            {
                location.pathname === '/' && 
                <div className="dashboard">
                    <h2>Welcome to the Dashboard</h2>
                    <p>This is the content of your dashboard.</p>
                </div>
            }
        </div>
    )
}

export default Home