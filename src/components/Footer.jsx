export default function Footer() {
  return (
    <div className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h5 className="pb-2">Contact Us</h5>
            <p>Glenwood Avenue, New Jersey</p>
            <p>Email: info.toteally@gmail.com</p>
            <p>Phone: +609 436 7690</p>
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
