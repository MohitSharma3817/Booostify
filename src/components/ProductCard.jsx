import { useState } from "react"
import { Helmet } from "react-helmet-async"

const ProductCard = ({ title, desc, image, price }) => {
  const [open, setOpen] = useState(false)

  const LIMIT = 90
  const shortText =
    desc.length > LIMIT ? desc.slice(0, LIMIT) + "..." : desc

  return (
    <>
      {/* PRODUCT CARD */}
      <article
        className="border rounded-lg p-4 shadow flex flex-col h-full"
        aria-labelledby={`product-${title}`}
      >
        {/* IMAGE CONTAINER (MORE SPACE + ALWAYS VISIBLE) */}
        <div className="h-64 w-full mb-3 bg-gray-50 rounded flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={`${title} mobile signal booster`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* TITLE */}
        <h3
          id={`product-${title}`}
          className="font-semibold text-lg mb-1"
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 leading-5">
          {shortText}
        </p>

        {/* READ MORE */}
        {desc.length > LIMIT && (
          <button
            onClick={() => setOpen(true)}
            className="text-blue-600 text-sm mt-1 self-start"
            aria-label={`Read more about ${title}`}
          >
            Read more
          </button>
        )}

        
      </article>

      {/* MODAL */}
      {open && (
        <>
          {/* DYNAMIC SEO */}
          <Helmet>
            <title>{title} | Mobile Signal Booster | Boostify</title>
            <meta
              name="description"
              content={desc.slice(0, 155)}
            />
          </Helmet>

          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <div className="bg-white max-w-lg w-[90%] p-6 rounded shadow-lg">
              <h3
                id="product-modal-title"
                className="text-xl font-bold mb-4"
              >
                {title}
              </h3>

              <p className="text-gray-700 mb-6">{desc}</p>

              <button
                onClick={() => setOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
                aria-label="Close product details"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProductCard
