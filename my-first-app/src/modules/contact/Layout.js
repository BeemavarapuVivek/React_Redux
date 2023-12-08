import {Tab,TabList,Tabs} from 'react-tabs'
import {Link,Outlet} from 'react-router-dom'
const Layout = () =>{

return(
    <div className='sideBar'>

    <Link to="/">Home</Link>
    <Link to="/header">Header</Link>
    <Link to="/contact">Contact</Link>
    <Outlet/>
    </div>
    );
};export default Layout;