import React from 'react'
import { useLocation } from "react-router-dom";
import Sidebar from '../components/Sidebar';

const PageOne = () => {
  const location = useLocation();
  return (
    <div className="container">
        <Sidebar />
        { location.pathname === '/page-1' && 
          <div>
            <h1>I am Page 1</h1>
          </div> 
        }
    </div>
  )
}

export default PageOne