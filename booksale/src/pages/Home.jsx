import { NavLink } from "react-router";

function Home() {
  const books = [
    {
      title: "The Art of Reading",
      description: "Explore new ideas and discover the joy of reading.",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Stories to Remember",
      description: "Find stories that inspire your imagination.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Knowledge for Everyone",
      description: "Learn something new, one page at a time.",
      image:
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <main className="container">
      <section className="home-banner rounded-4 p-4 p-md-5 mb-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <p className="text-primary fw-semibold">WELCOME TO BOOKSTORE</p>
            <h1 className="display-5 fw-bold">
              Find Your Next Favorite Book
            </h1>
            <p className="lead">
              Discover inspiring stories, expand your knowledge, and enjoy
              every page of your reading journey.
            </p>
            <NavLink to="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </NavLink>
          </div>

          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80"
              alt="Books arranged on a library shelf"
              className="home-image rounded-4"
            />
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Featured Books</h2>
          <p className="text-secondary">
            Discover your next reading adventure.
          </p>
        </div>

        <div className="row g-4">
          {books.map((book) => (
            <div className="col-md-4" key={book.title}>
              <div className="card h-100 shadow-sm">
                <img
                  src={book.image}
                  className="card-img-top book-image"
                  alt={book.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;