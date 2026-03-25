/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import HowItWorks from './pages/HowItWorks';
import ForSchools from './pages/ForSchools';
import About from './pages/About';
import Contact from './pages/Contact';
import Investors from './pages/Investors';
import ShippingPolicy from './pages/legal/ShippingPolicy';
import ReturnsRefunds from './pages/legal/ReturnsRefunds';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import { AppProvider, useAppContext } from './context/AppContext';
import ComingSoonModal from './components/ComingSoonModal';
import InvestorModal from './components/InvestorModal';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const { isModalOpen, closeModal, isInvestorModalOpen, closeInvestorModal } = useAppContext();
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="for-schools" element={<ForSchools />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="investors" element={<Investors />} />
          <Route path="shipping" element={<ShippingPolicy />} />
          <Route path="returns" element={<ReturnsRefunds />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
        </Route>
      </Routes>
      <ComingSoonModal isOpen={isModalOpen} onClose={closeModal} />
      <InvestorModal isOpen={isInvestorModalOpen} onClose={closeInvestorModal} />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
}
