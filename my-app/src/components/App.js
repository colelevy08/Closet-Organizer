import '../App.css';
import AddNewClothes from './AddNewClothes';
import Header from './Header';
import ClosetContainer from './ClosetContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Your Closet Organizer
        <Header />
      </header>
      <ClosetContainer />
      <div className="sidebar">
      <AddNewClothes />
      </div>
    </div>
  );
}

export default App;
