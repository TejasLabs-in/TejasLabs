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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="for-schools" element={<ForSchools />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="investors" element={<Investors />} />
        </Route>
      </Routes>
    </Router>
  );
}
