import { Helmet } from "react-helmet-async"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa"

const Help = () => {
  return (
    <section
      id="help"
      className="py-20 bg-white"
      aria-labelledby="help-heading"
    >
      {/* SEO META */}
      <Helmet>
        <title>Boostify</title>
        <meta
          name="description"
          content="Get help and support from Boostify. Contact us via email, phone, WhatsApp or follow us on social media for updates."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2
          id="help-heading"
          className="text-3xl font-bold mb-6"
        >
          Need Help?
        </h2>

        {/* CONTACT INFO */}
        <address className="flex flex-col gap-3 items-center text-gray-700 not-italic">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <a
              href="mailto:support@mycompany.com"
              className="hover:underline"
            >
              support@mycompany.com
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-600" />
            <a
              href="tel:+919876543210"
              className="hover:underline"
            >
              +91 98765 43210
            </a>
          </p>
        </address>

        {/* SOCIAL LINKS */}
        <nav
          className="flex gap-6 mt-8 justify-center text-2xl"
          aria-label="Social media links"
        >
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Boostify Facebook page"
            className="text-blue-600 hover:scale-110 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Boostify Instagram profile"
            className="text-pink-600 hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Boostify YouTube channel"
            className="text-red-600 hover:scale-110 transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Boostify on WhatsApp"
            className="text-green-600 hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Help
