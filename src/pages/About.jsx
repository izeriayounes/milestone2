import aboutImg from "../assets/tote6.jpg";

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>About Tote-ally</h1>
            <p>
              Welcome to Tote-ally- Where Style Meets Utility! At Tote-ally we
              believe that fashion should practicality and sustainability.
              That's why we've made it our mission to create tote bags that are
              not only chic and stylish but also functional and eco-friendly..{" "}
            </p>
            <p>
              We envisioned designs that would seamlessly blend into your daily
              life, whether you're heading to the office, hitting the gym, or
              exploring a new city.{" "}
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
