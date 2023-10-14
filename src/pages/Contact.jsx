export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or need assistance, please feel free to
            get in touch with us here at Tote-ally. We're here to tote-ally
            help!{" "}
          </p>
        </div>
        <div className="col-lg-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="d-flex ml-auto btn btn-primary mb-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
