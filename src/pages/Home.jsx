import introImage from "../assets/intro-image.jpg";
import tote3 from "../assets/tote3.jpg";
import tote4 from "../assets/tote4.jpg";
import tote5 from "../assets/tote5.jpg";
import Link from "../components/Link";
import Product from "../components/Product";

export default function Home({ setCartItems, openModal }) {
  const products = [
    {
      id: 1,
      name: "Simply You",
      description: " Simple Letter Fashion Tote Bag. ",
      category: "Category 1",
      price: "6.99",
      src: tote3,
    },
    {
      id: 2,
      name: "Cute Bear",
      description: " Graphic Fashion Printed Casual Canvas Tote Bag. ",
      category: "Category 2",
      price: "5.37",
      src: tote4,
    },
    {
      id: 3,
      name: "Love All",
      description: " Letter Printed Casual Canvas Tote Bag. ",
      category: "Category 3",
      price: "7.69",
      src: tote5,
    },
  ];
  return (
    <div>
      <hr className="m-0 bg-light" />
      {/* Intro Content */}
      <div className="container intro bg-secondary p-5">
        <div className="row text-white">
          <div className="col-md-6">
            <h1>Welcome to Tote-ally</h1>
            <p>
              Each tote bag at Tote-ally is meticulously crafted with attention
              to detail. We source the finest, eco-friendly materials to ensure
              durability and longevity. Our skilled artisans put their heart and
              soul into every stitch, resulting in a product that not only looks
              good but stands the test of time.
            </p>
            <p>
              Discover our wide range of products and shop with confidence. We
              offer the best quality and prices.
            </p>
            <Link to="/products" className="btn btn-outline-light mb-4">
              Shop Now
            </Link>
          </div>
          <div className="col-md-6">
            <img src={introImage} className="img-fluid" alt="camera pic" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {/* Main Content */}
        <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
          <h2 className="section-title">Featured Products</h2>
          <div className="btn-wrap">
            <div className="btn-wrap">
              <Link to="/products" className="d-flex align-items-center">
                View all products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Featured Products */}
        <div className="row">
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}
              imgSrc={product.src}
              setCartItems={setCartItems}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
