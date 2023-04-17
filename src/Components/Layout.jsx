import { Outlet } from 'react-router-dom'
import "./Layout.css"
import Navbar from './Navbar';
import Sidebar from './SideBar';

export default function Layout() {
      
  return (
    <>        
    <Navbar />
    <Sidebar />
    <div className='outlet'>
      <Outlet />
    </div>
  </>
  )
  }
