import './App.css';
import CampaignList from './components/CampaignList';
import DonationList from './components/DontaitionList'
import CreateCampaign from './components/CreateCampaign';
import Header from './components/Header'
import LandingPage from './components/Landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div class="container">
          <Router >
            <Routes>
              <Route exact path="/" element={<LandingPage  />} />
              <Route exact path="/campaignlist" element={<CampaignList />} />
              <Route exact path="/createCampaign/:id" element={<CreateCampaign />} />
              <Route exact path="/donationList/:id" element={<DonationList />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
