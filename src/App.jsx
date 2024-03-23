// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import Work from "./pages/work/Work";
import Navbar from "./components/navbar/Navbar";
import { Container } from "react-bootstrap";
// import Footer from "./components/footer/Footer";
// import Scroll from "./components/scrollButton/Scroll";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Work = lazy(() => import("./pages/work/Work"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Scroll = lazy(() => import("./components/scrollButton/Scroll"));

function App() {
  return (
    <>
      <Navbar />
      <Container className="container-page">
        <Suspense fallback={<p style={{height : "100vh"}}>loading...</p>}>
          <section id="Home">
            <Home />
          </section>
        </Suspense>
        <Suspense fallback={<p>loading...</p>}>
          <section id="About">
            <About />
          </section>
        </Suspense>
        <Suspense fallback={<p>loading...</p>}>
          <section id="Work">
            <Work />
          </section>
        </Suspense>
        <Suspense fallback={<p>loading...</p>}>
          <section id="Contact">
            <Contact />
          </section>
        </Suspense>
      </Container>
      <Suspense fallback={<p>loading...</p>}>
        <Footer />
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <Scroll />
      </Suspense>
      
    </>
  );
}

export default App;
