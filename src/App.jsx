import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ToolsSection from "./components/ToolsSection";
import TradersFlow from "./components/TradersFlow";
import ProjectsMarketplace from "./components/ProjectsMarketplace";
import TradersList from "./components/TradersList";
import WhyChooseMAI from "./components/WhyChooseMAI";
import KnowledgeHub from "./components/KnowledgeHub";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-montserrat">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ToolsSection />
        <TradersFlow />
        <ProjectsMarketplace />
        <TradersList />
        <WhyChooseMAI />
        <KnowledgeHub />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
