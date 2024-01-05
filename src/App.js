import './App.css';
import  Navbar  from './components/navbar';
import  Hero  from './components/Hero';
import Destinations from './components/Destinations'
import Search from './components/Search';
import Selects from './components/Selects';
import Crousel from './components/Crousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Crousel />
      <Footer />
    </div>
  );
}

export default App;
