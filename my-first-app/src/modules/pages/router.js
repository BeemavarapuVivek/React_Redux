import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Calendar from './Calendar.js'
import CommissionUtilities from './CommissionUtilities.js'
import Home from './Home.js'
import Insurance from './Insurance.js'
import Integration from './Integration.js'
import Investments from './Investments.js'
import Layout from './Layout.js'
import PeopleCompanies from './PeopleCompanies.js'
import Reports from './Reports.js'
import Sales from './Sales.js'
import SetUp from './SetUp.js'
import Utilities from './Utilities.js'

const PageRouter=()=> {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index  element={<Home/>}></Route>
        <Route path='/calendar'  element={<Calendar/>}></Route>
        <Route path='/people' element={<PeopleCompanies/>}></Route>
        <Route path='/sales' element={<Sales/>}></Route>
        <Route path='/reports' element={<Reports/>}></Route>
        <Route path='/insurance' element={<Insurance/>}></Route>
        <Route path='/investments' element={<Investments/>}></Route>
        <Route path='/commission' element={<CommissionUtilities/>}></Route>
        <Route path='/utilities' element={<Utilities/>}></Route>
        <Route path='/setup' element={<SetUp/>}></Route>
        <Route path='/integration' element={<Integration/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
};export default PageRouter;
