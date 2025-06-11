import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KitchenShowcase from './components/KitchenShowcase';
import TestimonialSection from './components/TestimonialSection';
import CustomerGallery from './components/CustomerGallery';
import Footer from './components/Footer';
import data from './data/home.json';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar data={data.navbar} />
      <main>
      <Hero data={data.hero} />
        <KitchenShowcase data={data.showcase}/>
        <TestimonialSection data={data.testimonial}/>
        <CustomerGallery data={data.gallery} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
}

export default App;
