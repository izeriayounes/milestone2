import Product from "../components/Product";
import tote7 from "../assets/tote7.jpg";
import tote8 from "../assets/tote8.jpg";
import tote9 from "../assets/tote9.jpg";
import tote10 from "../assets/tote10.jpg";
import tote11 from "../assets/tote11.jpg";
import tote12 from "../assets/tote12.jpg";
import tote13 from "../assets/tote13.jpg";
import tote14 from "../assets/tote14.jpg";
import tote15 from "../assets/tote15.jpg";
import tote16 from "../assets/tote16.jpg";
import tote17 from "../assets/tote17.jpg";
import tote18 from "../assets/tote18.jpg";

const products = [
  {
    id: 1,
    name: "You Know Me",
    description: " Classic Tote Canvas bag. ",
    category: "Category 1",
    price: 7.34,
    src: tote7,
  },
  {
    id: 2,
    name: "Autumn Days",
    description: " Light Autumn Days Canvas Tote Bag . ",
    category: "Category 2",
    price: 5.16,
    src: tote8,
  },
  {
    id: 3,
    name: "One Direction",
    description: " One Direction Quote Canvas Tote Bag. ",
    category: "Category 1",
    price: 6.1,
    src: tote9,
  },
  {
    id: 4,
    name: "Gotta Think Big Tote Bag",
    description: " Think Big Graphic Tote Bag.",
    category: "Category 3",
    price: 10.99,
    src: tote18,
  },
  {
    id: 5,
    name: "Chic Tote Twins",
    description: " Classic Twin Solid Bag.",
    category: "Category 2",
    price: 14.99,
    src: tote11,
  },
  {
    id: 6,
    name: "Large Essesntials",
    description: " Large Essentials Tote Bag.",
    category: "Category 3",
    price: 11.18,
    src: tote12,
  },
  {
    id: 7,
    name: "Fruit Á Cartoon Tote Bag",
    description: " Fruits Á Cartoon Vibe Tote Bag.",
    category: "Category 1",
    price: 4.99,
    src: tote13,
  },
  {
    id: 8,
    name: "Self Love Tote Bag",
    description: " Self Love Inspo Tote Bag. ",
    category: "Category 2",
    price: 4.87,
    src: tote14,
  },
  {
    id: 9,
    name: "HTML Everyday",
    description: " Graphic H.T.M.L Tote Bag.",
    category: "Category 3",
    price: 7.49,
    src: tote15,
  },
  {
    id: 10,
    name: "White Bear Tote Bag",
    description: " Graphic White Bear Tote Bag.",
    category: "Category 1",
    price: 1.99,
    src: tote16,
  },
  {
    id: 11,
    name: "Let's Go Together Tote Bag",
    description: " Aventure Together Graphic Tote Bag.",
    category: "Category 2",
    price: 6.99,
    src: tote17,
  },
  {
    id: 12,
    name: "I'm So Solid",
    description: " Solid Tote Bag. ",
    category: "Category 3",
    price: 10.76,
    src: tote10,
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
            imgSrc={product.src}
            setCartItems={setCartItems}
            openModal={openModal}
          />
        ))}
      </div>
      <div class="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span class="text-secondary" aria-hidden="true">
                  «
                </span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-secondary" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-secondary" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-secondary" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span class="text-secondary" aria-hidden="true">
                  »
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
