import React from 'react'
import LeftBar from '../../Components/Leftsidebar/LeftBar';
import RightBar from '../../Components/Rightsidebar/RightBar';
import QueDetails from '../Questions/QueDetails';
const DisplayQues = (slidein) => {
  return (
    <div className="home-container-1">
      <LeftBar slidein={slidein} />
      <div className="home-container-2">
        <QueDetails />
        <RightBar />
      </div>
    </div>
  )
}

export default DisplayQues
