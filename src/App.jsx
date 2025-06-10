import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KitchenShowcase from './components/KitchenShowcase';
import TestimonialSection from './components/TestimonialSection';
import CustomerGallery from './components/CustomerGallery';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <KitchenShowcase />
        <TestimonialSection />
        <CustomerGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
