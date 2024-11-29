import { fetchallusers } from './action/users';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AllRoutes from './AllRoutes';
import HomePage from './Components/HomePages/HomePage';
import LeftBar from './Components/Leftsidebar/LeftBar';

function App() {
  const [slidein, setslidein] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallusers());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setslidein(false);
    }
  }, []);

  const handleslidein = () => {
    setslidein((state) => !state);
  };

  return (
    <Router>
      <div className="app-container">
        <HomePage handleslidein={handleslidein} />
        {<LeftBar slidein={slidein} />}
        <AllRoutes slidein={slidein} handleslidein={handleslidein} />
      </div>
    </Router>
  );
}

export default App;
