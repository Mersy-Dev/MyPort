import './App.css';
import Features from './components/Features/Features';
import Header from './components/Head/Header'
import Home from "./components/Hero/Home"
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <>  
      <Header/>
      <Home />
      <Features />
      <Portfolio />
      <Resume />

    </>
  );
}

export default App;
