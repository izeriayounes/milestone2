import Product from "../components/Product";
import { get } from "../api/apiService";
import { useEffect, useState } from "react";
import noImage from "../assets/noImage.png";

export default function Products({ setCartItems, openModal }) {
  const [products, setProducts] = useState([]);

  const getProds = async () => {
    try {
      const data = await get("products");
      setProducts(data);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <div className="container mt-5">
      <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
        <h2 className="section-title">All Products</h2>
      </div>
      <div className="row">
        {products.map((product) => {
          const src =
            product.image != null
              ? `data:image/*;base64,${product.image}`
              : noImage;
          return (
            <Product
              key={product.id}
              {...product}
              src={src}
              image={product.image}
              setCartItems={setCartItems}
              openModal={openModal}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="" aria-label="Previous">
                <span className="text-secondary" aria-hidden="true">
                  «
                </span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-secondary" href="">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-secondary" href="">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-secondary" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span className="text-secondary" aria-hidden="true">
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
