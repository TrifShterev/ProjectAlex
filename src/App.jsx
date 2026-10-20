import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EatSmart from './components/EatSmart';
import About from './components/About';
import Services from './components/Services';
// import Gallery from './components/Gallery'; // hidden until real client photos are added
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <EatSmart />
        <About />
        <Services />
        {/* <Gallery /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
