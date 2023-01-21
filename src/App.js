import Experience from './components/Experience';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';
import './index.css';

function App() {
  return (
    <div className="relative bg-black pb-10">
      <Navbar/>
      <HeroSection/>
      <div className='fixed top-1/2 left-0'>
        <SocialLinks/>
      </div>
      <Experience/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
