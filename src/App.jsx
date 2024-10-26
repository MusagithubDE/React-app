import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DataRecovery from './pages/DataRecovery';
import Meetings from './pages/Meetings';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/datarecoverty" element={<DataRecovery />} />
          <Route path="/meetings" element={<Meetings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
