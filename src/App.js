import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Header from './components/Head/Header'
import Home from "./components/Hero/Home"
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>  
      <Header/>
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      {/* <Blog /> */}
      <Contact /> 

    </>
  );
}

export default App;
