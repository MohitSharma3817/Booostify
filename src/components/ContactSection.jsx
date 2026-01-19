import { Helmet } from "react-helmet-async"
import background from "../assets/background.jpg"

const ContactSection = () => {
  return (
    <section
      id="form"
      className="min-h-screen bg-cover bg-center flex items-center"
      aria-labelledby="contact-heading"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* SEO META */}
      <Helmet>
        <title>
          Contact Us | Mobile Signal Booster Enquiry | Boostify Technologies
        </title>
        <meta
          name="description"
          content="Get in touch with Boostify to enquire about mobile signal boosters for homes, offices, and industries. Fast response guaranteed."
        />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto px-4 flex justify-center md:justify-end">
        {/* FORM CARD */}
        <div className="bg-[#dde8e2f0] w-full sm:w-105 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2
            id="contact-heading"
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-6"
          >
            Enquire about Mobile Signal Boosters right now!
          </h2>

          <form
            action="https://formspree.io/f/mykkjwqq"
            method="POST"
            className="flex flex-col gap-4"
            aria-label="Mobile signal booster enquiry form"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="3"
              className="p-3 rounded-md outline resize-none bg-white"
              required
            ></textarea>

            {/* OPTIONAL: Formspree spam protection */}
            <input type="hidden" name="_subject" value="New Website Enquiry" />
            <input type="hidden" name="_template" value="table" />

            <button
              type="submit"
              className="bg-[#0b3c5d] text-white py-3 rounded-full font-semibold hover:bg-[#092f4a] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
