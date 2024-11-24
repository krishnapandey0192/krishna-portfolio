import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Krishna Pandey - Full-Stack Developer Portfolio</title>
          <meta
            name="description"
            content="Your ideas, my React skills—together, we build web magic! Showcasing projects and skills of Krishna Pandey, a Full-Stack Developer with expertise in building modern web applications."
          />
          <meta
            name="keywords"
            content="React Developer, Portfolio, Full-Stack Developer, JavaScript, Web Developer, Krishna Pandey Portfolio"
          />
          <meta name="author" content="Krishna Pandey" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph for social media */}
          <meta
            property="og:title"
            content="Krishna Pandey - Full-Stack Developer Portfolio"
          />
          <meta
            property="og:description"
            content="A portfolio showcasing React and full-stack development projects."
          />
          <meta
            property="og:url"
            content="https://krishna-portfolio-navy.vercel.app/"
          />

          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta
            name="twitter:title"
            content="Krishna Pandey - Full-Stack Developer Portfolio"
          />
          <meta
            name="twitter:description"
            content="Showcasing React projects and skills."
          />

          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Navbar />
        <main className=" bg-bgDark text-textWhite px-5 md:px-8">
          <HeroSection />
          <About />
          <Projects />
          <Contact />
        </main>
      </HelmetProvider>
    </>
  );
}
