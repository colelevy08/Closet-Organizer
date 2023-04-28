import '../index.css';
import React from 'react';
import Header from './Header';
import ClosetContainer from './ClosetContainer';
import AddedClothes from './AddedClothes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app'>
        <Header />
        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/added-clothes">View Added Clothes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ClosetContainer />} />
          <Route path="/added-clothes" element={<AddedClothes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;