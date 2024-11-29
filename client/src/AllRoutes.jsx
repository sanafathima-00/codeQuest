import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AskQue from '../src/Pages/AskQuestions/AskQue';
import Homie from './Pages/Home/Homie';
import Auth from '../src/Pages/Authentication/Auth'
import Ques from '../src/Pages/Questions/Ques';
import DisplayQues from './Pages/Questions/DisplayQues';
import QueDetails from './Pages/Questions/QueDetails';
import Tags from '../src/Pages/Tag/Tags'
import Users from '../src/Pages/Use/Users'
import Profile from '../src/Pages/UserProfile/Profile'
function AllRoutes({ slidein, handleslidein }) {
  return (
    <Routes>
      <Route path="/" element={<Homie slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/AskQue" element={<AskQue />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Ques" element={<Ques slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/Ques/:id" element={<DisplayQues slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/Question/:id" element={<QueDetails />} />
      <Route path="/Tags" element={<Tags slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/Users" element={<Users slidein={slidein} handleslidein={handleslidein} />} />
      <Route path="/Users/:id" element={<Profile slidein={slidein} handleslidein={handleslidein} />} />
    </Routes>
  );
}

export default AllRoutes;
