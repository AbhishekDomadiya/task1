import React from 'react'
import { useLocation } from "react-router-dom";
import Sidebar from '../components/Sidebar';

const PageThree = () => {
  const location = useLocation();
  return (
    <div className="container">
        <Sidebar />
        { location.pathname === '/page-3' && 
          <div>
            <h1>I am Page 3</h1>
          </div> 
        }
    </div>
  )
}

export default PageThree