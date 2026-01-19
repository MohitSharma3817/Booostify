import { Helmet } from "react-helmet-async"

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      {/* SEO META */}
      <Helmet>
        <title>About Us | Boostify Mobile Signal Boosters</title>
        <meta
          name="description"
          content="Learn about Boostify, a trusted provider of high-quality mobile signal boosters for homes, offices, and industrial spaces across India."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4">
        <article>
          <h2
            id="about-heading"
            className="text-3xl font-bold mb-4"
          >
            About Boostify
          </h2>

          <p className="text-gray-700 leading-7">
            Boostify is a technology-driven company dedicated to providing cutting-edge mobile signal boosters and comprehensive communication solutions.
            We specialize in enhancing network connectivity for homes, offices, and industrial environments, ensuring strong and reliable mobile signals 
            in areas where coverage is weak. Our commitment is to deliver superior performance and seamless connectivity, empowering our customers with 
            uninterrupted communication.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
