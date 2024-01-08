import React from 'react'
import { useLocation } from "react-router-dom";
import Sidebar from '../components/Sidebar';

const PageTwo = () => {
  const location = useLocation();
  return (
    <div className="container">
        <Sidebar />
        { location.pathname === '/page-2' && 
          <div>
            <h1>I am Page 2</h1>
          </div> 
        }
    </div>
  )
}

export default PageTwo