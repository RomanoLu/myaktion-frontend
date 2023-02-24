import './App.css';
import CampaignList from './components/CampaignList';
import DonationList from './components/DontaitionList'
import CreateCampaign from './components/CreateCampaign';
import Header from './components/Header';
import LandingPage from './components/Landing';
import EditCampaign from './components/EditCampaign';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import DonationForm from './components/DonationForm';
import EditDonationForm from './components/EditDonationForm'

function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div className="container">
          <Router >
            <Routes>
              <Route exact path="/" element={<LandingPage  />} />
              <Route exact path="/campaignlist" element={<CampaignList />} />
              <Route exact path="/createCampaign" element={<CreateCampaign />} />
              <Route exact path="/editCampaign/:dynamicProp" element={<EditCampaign />} />
              <Route exact path="/donationList/:dynamicProp" element={<DonationList />} />
              <Route exact path="/donationform/:dynamicProp/:formcolor/:textcolor" element={<DonationForm />} />              
              <Route exact path="/editdonationform/:dynamicProp" element={<EditDonationForm />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
