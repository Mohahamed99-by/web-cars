import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cars from './pages/Cars';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/cars-site" element={<Home />} />
            <Route path="/cars-site/cars" element={<Cars />} />
            <Route path="/cars-site/about" element={<About />} />
            <Route path="/cars-site/contact" element={<Contact />} />
            <Route path="/cars-site/booking/:id" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
