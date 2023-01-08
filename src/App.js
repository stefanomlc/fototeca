import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer/>
    <h2>va el Item Detail Container</h2>
    <ItemDetailContainer/>
    </>
      
  );
}

export default App;
