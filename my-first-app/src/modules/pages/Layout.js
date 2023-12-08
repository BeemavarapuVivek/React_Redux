import React from 'react'
import { Link,Outlet,NavLink } from 'react-router-dom'
const Layout=()=> {
  return (

       
      <div className='container'>
      
      <div className='sidebar'>
        
            <Link className="tab_section" to="/">Home</Link>
            <Link className="tab_section" to="/calendar">Calendar</Link>
            <Link className="tab_section" to="/people">People</Link>
            <Link className="tab_section" to="/sales">Sales & Marketing</Link>
            <Link className="tab_section" to="/reports">Reports</Link>
            <Link className="tab_section" to="/insurance">Insurance</Link>
            <Link className="tab_section" to="/investments">Investments</Link>
            <Link className="tab_section" to="/commission">Commission</Link>
            <Link className="tab_section" to="/utilities">Utilities</Link>
            <Link className="tab_section" to="/setUp">SetUp</Link>
            <Link className="tab_section" to="/integration">Integration</Link>
            
            </div>
            <Outlet/>
    </div>
    

    
  )
};export default Layout;
