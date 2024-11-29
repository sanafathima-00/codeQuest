import React from 'react'
import LeftBar from '../../Components/Leftsidebar/LeftBar';
import RightBar from '../../Components/Rightsidebar/RightBar';
import HomeBar from '../../Components/Homemainbar/Homebar';
import '../../App.css';
const Ques = ({slidein}) => {
  return (
    <div className="home-container-1">
      <LeftBar slidein={slidein} />
      <div className="home-container-2">
        <HomeBar />
        <RightBar />
      </div>
    </div>
  )
}

export default Ques
