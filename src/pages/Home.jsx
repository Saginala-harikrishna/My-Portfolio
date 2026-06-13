import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Journey from "../components/Journey";
import FeaturedProjects from "../components/FeaturedProjects";
import ExperiencePreview from "../components/ExperiencePreview";
import Leadership from "../components/Leadership";
import YouTubeSection from "../components/YouTubeSection";
import FinalCTA from "../components/FinalCTA";



export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Journey />
      <FeaturedProjects />
      <ExperiencePreview />
      <Leadership />
      <YouTubeSection />
      <FinalCTA />
   
  
    </>
  );
}