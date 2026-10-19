import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#07090e] text-gray-100 flex flex-col justify-between selection:bg-[#008efb]/30 selection:text-white relative overflow-x-hidden">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
