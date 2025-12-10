import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import VideoGallery from './components/VideoGallery';
import Tips from './components/Tips';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <VideoGallery />
        <Tips />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
