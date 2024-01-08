import React from 'react'
import { useLocation } from "react-router-dom";
import Sidebar from '../components/Sidebar';

const PageFour = () => {
  const location = useLocation();
  return (
    <div className="container">
        <Sidebar />
        { location.pathname === '/page-4' && 
          <div>
            <h1>I am Page 4</h1>
          </div> 
        }
    </div>
  )
}

export default PageFour