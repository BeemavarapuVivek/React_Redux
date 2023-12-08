import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Layout  from './Layout.js';
import Home from './Home.js'
import Header from './Header.js'
import Contact from './Contact.js'
import Nopage from './Nopage.js'

const ContactRouter=()=>{

return(
<BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/> } />
<Route  path="/header" element={<Header/>} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="*" element={<Nopage/>} />
</Route>
</Routes>
</BrowserRouter>);
}; export default ContactRouter;