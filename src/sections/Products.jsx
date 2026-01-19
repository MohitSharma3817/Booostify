import { Helmet } from "react-helmet-async"
import ProductCard from "../components/ProductCard"
import productsData from "../data/productData"

const Products = () => {
  return (
    <section
      id="products"
      className="py-20 bg-gray-100"
      aria-labelledby="products-heading"
    >
      {/* SEO META */}
      <Helmet>
        <title>Products | Mobile Signal Boosters for Home & Office | Boostify</title>
        <meta
          name="description"
          content="Explore Boostify’s range of mobile signal boosters designed for homes, offices, and industrial spaces. Improve connectivity with reliable signal solutions."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <header>
          <h2
            id="products-heading"
            className="text-3xl font-bold mb-4"
          >
            Our Products
          </h2>

          <p className="text-gray-700 mb-8 max-w-3xl">
            Discover our range of high-performance mobile signal boosters
            designed to enhance network coverage and ensure reliable
            connectivity for residential, commercial, and industrial use.
          </p>
        </header>

        {/* PRODUCT LIST */}
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          role="list"
        >
          {productsData.map((product) => (
            <article key={product.id} role="listitem">
              <ProductCard
                title={product.title}
                desc={product.description}
                image={product.image}
                
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
