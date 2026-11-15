import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const SectionLoader = () => <div className="section-loader">Loading...</div>;

const App = () => (
  <div className="container">
    <section id="home">
      <Suspense fallback={<SectionLoader />}>
        <Hero />
      </Suspense>
    </section>

    <section id="services">
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
    </section>

    {/* <section id="portfolio"> */}
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>
    {/* </section> */}

    <section id="contact">
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </section>
  </div>
);

export default App;