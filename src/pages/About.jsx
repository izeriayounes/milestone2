import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula, enim at sagittis porta, libero libero congue libero, eu
              fringilla orci arcu eu ligula.
            </p>
            <p>
              Our mission is to provide high-quality products to our customers
              at affordable prices. We have a wide range of products to meet
              your needs, from electronics to fashion and more.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={aboutImg}
              className="img-fluid"
              height="24"
              alt="About Us pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
