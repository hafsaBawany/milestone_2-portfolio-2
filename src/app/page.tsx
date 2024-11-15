import Image from "next/image";
import styles from "./page.module.css";


import Navbar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/Service';
import ProjectSection from "@/components/ProjectSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectSection />
      <ServicesSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Home;