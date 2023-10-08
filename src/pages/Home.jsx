import introImage from "../assets/intro-image.jpg";
import cameraImg from "../assets/img.webp";
import Link from "../components/Link";
import Product from "../components/Product";

export default function Home({ setCartItems, openModal }) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "Category 1",
      price: "19.99",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore .",
      category: "Category 2",
      price: "24.99",
    },
    {
      id: 3,
      name: "Product 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      category: "Category 3",
      price: "29.99",
    },
  ];
  return (
    <div>
      <hr className="m-0 bg-light" />
      {/* Intro Content */}
      <div className="container intro bg-secondary p-5">
        <div className="row text-white">
          <div className="col-md-6">
            <h1>Welcome to My Online Store</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt quam nec arcu fringilla, sed condimentum dui convallis.
              Nulla facilisi. Nunc euismod ultricies sem, eget eleifend risus
              iaculis nec.
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
              imgSrc={cameraImg}
              setCartItems={setCartItems}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
