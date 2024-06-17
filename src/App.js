import './App.css';
import './custom.css'
import LeftBar from './components/leftbar.jsx';
import MainPage from './components/MainPage.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';

import SkillsVideos from './components/SkillsVideos.jsx';
import PhysioVideos from './components/PhysioVideos.jsx';
import UpcomingEvents from './components/UpcomingEvents.jsx';
import BuySell from './components/BuyAndSell.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (<Router>
            <div className="App">
                <LeftBar></LeftBar>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/AboutUs" element={<AboutUs />} />
                  <Route path="/ContactUs" element={<ContactUs />} />
                  <Route path="/SkillsVideos" element={<SkillsVideos />} />
                  <Route path="/PhysioVideos" element={<PhysioVideos />} />
                  <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
                  <Route path="/BuySell" element={<BuySell />} />                  
                </Routes>
            </div>
        </Router>
  );
}

export default App;
