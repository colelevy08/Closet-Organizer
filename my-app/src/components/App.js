import '../index.css';
import React from 'react';
import Header from './Header';
import ClosetContainer from './ClosetContainer';
import AddedClothes from './AddedClothes';
import ClothingInspiration from './ClothingInspiration'; // Import your new component
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
          {" | "}
          <Link to="/inspiration">Clothing Inspiration</Link> {/* Add a link to your new page */}
        </nav>
        <Routes>
          <Route path="/" element={<ClosetContainer />} />
          <Route path="/added-clothes" element={<AddedClothes />} />
          <Route path="/inspiration" element={<ClothingInspiration />} /> {/* Add a route for your new page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
