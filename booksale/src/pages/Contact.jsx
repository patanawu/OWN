function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for contacting Bookstore!");
  }

  return (
    <main className="container py-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-secondary">
          Have a question? Send us a message.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-5">
          <div className="card h-100 p-4 shadow-sm">
            <h4 className="mb-4">Get in Touch</h4>
            <p>
              <i className="fa-solid fa-envelope me-2 text-primary" />
              hello@bookstore.com
            </p>
            <p>
              <i className="fa-solid fa-phone me-2 text-primary" />
              +62 812-3456-7890
            </p>
            <p>
              <i className="fa-solid fa-location-dot me-2 text-primary" />
              Jakarta, Indonesia
            </p>
          </div>
        </div>

        <div className="col-md-7">
          <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;