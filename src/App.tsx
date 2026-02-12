import { TopBar } from './sections/TopBar';
import { Hero } from './sections/Hero';
import { ContactStrip } from './sections/ContactStrip';
import { TrustStrip } from './sections/TrustStrip';
import { Services } from './sections/Services';
import { Payment } from './sections/Payment';
import { WhyChoose } from './sections/WhyChoose';
import { Footer } from './sections/Footer';
import { StickyContact } from './components/StickyContact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Hero />
      <ContactStrip />
      <TrustStrip />
      <Services />
      <Payment />
      <WhyChoose />
      <Footer />
      <StickyContact />
      <div className="h-24 md:hidden" aria-hidden />
    </div>
  );
}

export default App;
