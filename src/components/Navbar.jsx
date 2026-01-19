import { useState } from "react"
import { Helmet } from "react-helmet-async"
import Logo from "../assets/Logo.jpeg"

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
        <nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center relative">
            
            {/* LOGO */}
            <div className="absolute left-6">
              <img
                src={Logo}
                alt="Boostify Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex mx-auto gap-12 font-medium text-slate-200">
              {["home", "about", "products", "contact", "help"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="
                      relative py-1
                      hover:text-cyan-400
                      transition-colors duration-300
                      after:content-['']
                      after:absolute after:left-0 after:-bottom-1
                      after:w-0 after:h-[2px]
                      after:bg-cyan-400
                      hover:after:w-full
                      after:transition-all after:duration-300
                    "
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden absolute right-6 text-3xl text-slate-200"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden bg-slate-800 shadow-inner px-6 pb-6">
              <ul className="flex flex-col gap-6 font-semibold text-slate-200">
                {["home", "about", "products", "contact", "help"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Navbar
