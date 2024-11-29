import React from 'react';
import './Homebar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuestionList from '../Homemainbar/QuestionList';

function Homebar() {
  const user = 1;
  const location = useLocation();
  const questionlist = useSelector((state)=>state.questionreducer);;
  const navigate = useNavigate();

  const checkauth = () => {
    if (user === null) {
      alert('Login or signup to ask a question');
      navigate('/Auth');
    } else {
      navigate('/AskQue');
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <button className="ask-btn" onClick={checkauth}>
          Ask Questions
        </button>
      </div>
      <div>
        {questionlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionlist.data.length} questions</p>
            <QuestionList questionlist={questionlist.data} />
          </>
        )}
      </div>
    </div>
  );
}

export default Homebar;
