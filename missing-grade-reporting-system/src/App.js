import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Overview from './Components/Overview-Page/overviewPage.jsx';
import Login from './Components/Login-Page/login.jsx';
import Dashboard from './Components/Dashboard-Page/dashboardPage.jsx';
import MissingGradeForm from './Components/Missing-Grade-Form-Page/missingGradeForm.jsx';
import GradeReport from './Components/Grade-Report-Page/gradeReport.jsx';
import HelpAndSupport from './Components/Help-Support-Page/helpSupport.jsx';
import Contacts from './Components/Instructor-Contact-Page/instructorContact.jsx';

function App() {
  
  return (

    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/missing-grade-form" element={<MissingGradeForm />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/help-and-support" element={<HelpAndSupport />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
