import { useRef } from "react"
import { Helmet } from "react-helmet-async"
import emailjs from "@emailjs/browser"

const ContactSection = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Request sent successfully ✅")
        e.target.reset()
      })
      .catch(() => {
        alert("Something went wrong ❌")
      })
  }

  return (
    <section
      id="form"
      className="min-h-screen bg-cover bg-center flex items-center"
      aria-labelledby="contact-heading"
      
      style={{
        backgroundImage:
          "url('../src/assets/background.jpg')",
      }}
    >
      {/* SEO META */}
      <Helmet>
        <title>Contact Us | Mobile Signal Booster Enquiry | Boostify</title>
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
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
            aria-label="Mobile signal booster enquiry form"
          >
            <label className="sr-only" htmlFor="user_name">
              Name
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Name"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <label className="sr-only" htmlFor="user_mobile">
              Mobile Number
            </label>
            <input
              id="user_mobile"
              type="tel"
              name="user_mobile"
              placeholder="Mobile Number"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <label className="sr-only" htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="Email"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <label className="sr-only" htmlFor="user_city">
              City
            </label>
            <input
              id="user_city"
              type="text"
              name="user_city"
              placeholder="City"
              className="p-3 rounded-md outline bg-white"
              required
            />

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="2"
              className="p-3 rounded-md outline resize-none bg-white"
              required
            ></textarea>

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
