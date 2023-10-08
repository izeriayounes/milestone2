export default function Footer() {
  return (
    <div className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h5 className="pb-2">Contact Us</h5>
            <p>123 Street Name, City</p>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className="col-6 text-right">
            <h5>Follow Us</h5>
            <a href="#">
              <i className="bi bi-facebook mr-3"></i>
            </a>
            <a href="#">
              <i className="bi bi-twitter mr-3"></i>
            </a>
            <a href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
