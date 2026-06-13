import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Certifications from "../pages/Certifications";
import Leadership from "../pages/Leadership";
import YouTube from "../pages/YouTube";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import ProjectDetails from "../pages/ProjectDetails";

import MainLayout from "../layouts/MainLayout";

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/youtube" element={<YouTube />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/projects/:slug"
  element={<ProjectDetails />}
/>
      </Routes>
    </MainLayout>
  );
}