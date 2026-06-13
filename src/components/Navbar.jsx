import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b p-4">
      <div className="max-w-7xl mx-auto flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/leadership">Leadership</Link>
        <Link to="/youtube">YouTube</Link>
        {/* <Link to="/resume">Resume</Link> */}
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}