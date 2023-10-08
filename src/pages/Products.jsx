import cameraImg from "../assets/img.webp";
import Product from "../components/Product";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    price: 19.99,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 2",
    price: 24.99,
  },
  {
    id: 3,
    name: "Product 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    price: 29.99,
  },
  {
    id: 4,
    name: "Product 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 3",
    price: 14.99,
  },
  {
    id: 5,
    name: "Product 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 2",
    price: 39.99,
  },
  {
    id: 6,
    name: "Product 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 3",
    price: 12.99,
  },
  {
    id: 7,
    name: "Product 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    price: 21.99,
  },
  {
    id: 8,
    name: "Product 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 2",
    price: 34.99,
  },
  {
    id: 9,
    name: "Product 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 3",
    price: 9.99,
  },
  {
    id: 10,
    name: "Product 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    price: 27.99,
  },
  {
    id: 11,
    name: "Product 11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 2",
    price: 19.99,
  },
  {
    id: 12,
    name: "Product 12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 3",
    price: 14.99,
  },
  {
    id: 13,
    name: "Product 13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    price: 31.99,
  },
  {
    id: 14,
    name: "Product 14",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 2",
    price: 23.99,
  },
  {
    id: 15,
    name: "Product 15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 3",
    price: 17.99,
  },
  {
    id: 16,
    name: "Product 16",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    price: 37.99,
  },
  {
    id: 17,
    name: "Product 17",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 2",
    price: 28.99,
  },
  {
    id: 18,
    name: "Product 18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 3",
    price: 22.99,
  },
  {
    id: 19,
    name: "Product 19",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 1",
    price: 32.99,
  },
  {
    id: 20,
    name: "Product 20",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "Category 2",
    price: 26.99,
  },
];

export default function Products({ setCartItems, openModal }) {
  return (
    <div className="container mt-5">
      <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
        <h2 className="section-title">All Products</h2>
      </div>
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
  );
}
