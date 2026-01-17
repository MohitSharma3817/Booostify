import { useState } from "react"
import { Helmet } from "react-helmet-async"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (!element) return

    const yOffset = -80
    const y =
      element.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset

    window.scrollTo({ top: y, behavior: "smooth" })
    setOpen(false)
  }

  return (
    <>
      {/* GLOBAL SEO */}
      <Helmet>
        <title>Boostify | Mobile Signal Boosters for Home & Office</title>
        <meta
          name="description"
          content="Boostify provides reliable mobile signal boosters for homes, offices, and industrial spaces across India."
        />
      </Helmet>

      <header>
        <nav className="fixed top-0 w-full bg-white shadow z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center relative">
            
            {/* LOGO */}
            <div className="absolute left-6">
              <img
                src="/src/assets/logo.jpeg"
                alt="Boostify Logo"
                className="h-20 w-24"
              />
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex mx-auto gap-10 font-medium">
              <li><button onClick={() => scrollTo("home")}>Home</button></li>
              <li><button onClick={() => scrollTo("about")}>About</button></li>
              <li><button onClick={() => scrollTo("products")}>Products</button></li>
              <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
              <li><button onClick={() => scrollTo("help")}>Help</button></li>
            </ul>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden absolute right-6 text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden bg-white shadow px-6 pb-4">
              <ul className="flex flex-col gap-5 font-bold">
                <li><button onClick={() => scrollTo("home")}>Home</button></li>
                <li><button onClick={() => scrollTo("about")}>About</button></li>
                <li><button onClick={() => scrollTo("products")}>Products</button></li>
                <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
                <li><button onClick={() => scrollTo("help")}>Help</button></li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Navbar
