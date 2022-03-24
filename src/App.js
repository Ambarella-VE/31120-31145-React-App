import './App.css';
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Home message="Hola desde home"/>
      <NavBar />
    </>
  );
}

export default App;
