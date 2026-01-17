const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-10"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-3">
        
        {/* Invisible heading for SEO & accessibility */}
        <h2 id="footer-heading" className="sr-only">
          Contact Information
        </h2>

        {/* CONTACT INFO */}
        <address className="not-italic text-sm">
          <p>
            Email:&nbsp;
            <a
              href="mailto:info@mycompany.com"
              className="hover:underline"
            >
              info@mycompany.com
            </a>
          </p>

          <p>
            Phone:&nbsp;
            <a
              href="tel:+919999999999"
              className="hover:underline"
            >
              +91 99999 99999
            </a>
          </p>
        </address>

        {/* COPYRIGHT */}
        <p className="mt-4 text-xs text-gray-400">
          © 2026 Boostify. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
