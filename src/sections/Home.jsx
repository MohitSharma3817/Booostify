import { Helmet } from "react-helmet-async"
import ContactSection from "../components/ContactSection"

const Home = () => {
  return (
    <main id="home" aria-labelledby="home-heading">
      {/* SEO META */}
      <Helmet>
        <title>Boostify Technologies | Mobile Signal Boosters for Home & Office</title>
        <meta
          name="description"
          content="Boostify offers reliable mobile signal boosters for homes, offices, and industries. Improve network coverage and connectivity with our solutions."
        />
      </Helmet>

      {/* PRIMARY H1 (ONLY ONE PER SITE) */}
      <h1 id="home-heading" className="sr-only">
        Mobile Signal Boosters for Home, Office and Industry
      </h1>

      {/* HERO / CONTACT SECTION */}
      <ContactSection />
    </main>
  )
}

export default Home
