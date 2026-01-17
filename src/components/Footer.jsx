const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-8"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        
        {/* COMPANY INFO */}
        <div>
          <h2 id="footer-heading" className="font-bold text-lg mb-2">
            MyCompany
          </h2>
          <p className="text-sm text-gray-300">
            MyCompany provides reliable digital and technology solutions
            to help businesses grow and scale efficiently.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <address className="not-italic text-sm text-gray-300 space-y-1">
            <p>
              Email:&nbsp;
              <a
                href="mailto:support@mycompany.com"
                className="hover:underline"
              >
                support@mycompany.com
              </a>
            </p>
            <p>
              Phone:&nbsp;
              <a
                href="tel:+919876543210"
                className="hover:underline"
              >
                +91 98765 43210
              </a>
            </p>
          </address>
        </div>

        {/* FOOTER NAVIGATION */}
        <div>
          <h3 className="font-semibold mb-2">Help</h3>
          <nav
            className="flex flex-col gap-1 text-sm text-gray-300"
            aria-label="Footer help navigation"
          >
            <a href="#help" className="hover:underline">
              FAQs
            </a>
            <a href="#contact" className="hover:underline">
              Support
            </a>
          </nav>
        </div>

      </div>

      {/* COPYRIGHT */}
      <p className="text-center text-xs text-gray-400 mt-6">
        © 2026 MyCompany. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
