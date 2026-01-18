import { useRef } from "react"
import { Helmet } from "react-helmet-async"
import emailjs from "@emailjs/browser"

const ContactSection = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_46cffvf",
        "template_b6ekaj9",
        formRef.current,
        "Sainky"
      )
      .then(() => {
        alert("Request sent successfully ✅")
        e.target.reset()
      })
      .catch((err) => {
        console.log("EmailJS error:", err)
        alert("Something went wrong ❌")
      })
  }

  return (
    <section
      id="form"
      className="min-h-screen bg-cover bg-center flex items-center"
    >
      <Helmet>
        <title>Contact Us | Boostify</title>
        <meta
          name="description"
          content="Contact Boostify for mobile signal booster enquiry."
        />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto px-4 flex justify-center md:justify-end">
        <div className="bg-[#dde4ea] w-full max-w-md p-6 sm:p-8 rounded-xl shadow-xl">
          <h2 className="text-2xl font-bold text-[#0b3c5d] mb-6">
            Enquire about Mobile Signal Boosters right now!
          </h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            {/* REQUIRED FOR TEMPLATE */}
            <input type="hidden" name="title" value="Website Enquiry" />

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 rounded-md bg-white outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-md bg-white outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="4"
              className="p-3 rounded-md bg-white outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-2 bg-[#0b3c5d] text-white py-3 rounded-full font-semibold hover:bg-[#092f4a] transition"
            >
              REQUEST A CALLBACK
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
