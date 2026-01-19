import { Helmet } from "react-helmet-async"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Products from "./sections/Products"
import Help from "./sections/Help"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
      {/* GLOBAL FALLBACK SEO */}
      <Helmet>
        <title>Boostify Technologies | Mobile Signal Boosters for Home & Office</title>
        <meta
          name="description"
          content="Boostify provides reliable mobile signal boosters for homes, offices, and industrial spaces across India."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-20">
        <Home />
        <About />
        <Products />
        <Help />
      </main>

      <Footer />
    </>
  )
}

export default App
