import { useState } from "react";
import { useOutletContext } from "react-router";

function Book() {
  const { books, setBooks } = useOutletContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newBook = {
      id: books.length ? Math.max(...books.map((book) => book.id)) + 1 : 1,
      title: title.trim(),
      author: author.trim(),
      year: Number(year),
      description: description.trim(),
      image: image.trim() || "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    };

    setBooks((currentBooks) => [...currentBooks, newBook]);
    setTitle("");
    setAuthor("");
    setYear("");
    setDescription("");
    setImage("");
  }

  return (
    <main className="container py-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Daftar Buku</h1>
        <p className="text-secondary">Koleksi buku ditampilkan menggunakan method map().</p>
      </div>

      <section className="card shadow-sm p-4 mb-5">
        <h2 className="h4 mb-3">Tambah Buku</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="book-title" className="form-label">Judul buku</label>
              <input id="book-title" className="form-control" value={title}
                onChange={(event) => setTitle(event.target.value)} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="book-author" className="form-label">Penulis</label>
              <input id="book-author" className="form-control" value={author}
                onChange={(event) => setAuthor(event.target.value)} required />
            </div>
            <div className="col-md-4">
              <label htmlFor="book-year" className="form-label">Tahun terbit</label>
              <input id="book-year" type="number" min="1000" max="2100"
                className="form-control" value={year}
                onChange={(event) => setYear(event.target.value)} required />
            </div>
            <div className="col-md-8">
              <label htmlFor="book-image" className="form-label">URL gambar (opsional)</label>
              <input id="book-image" type="url" className="form-control"
                placeholder="https://example.com/book.jpg" value={image}
                onChange={(event) => setImage(event.target.value)} />
            </div>
            <div className="col-12">
              <label htmlFor="book-description" className="form-label">Deskripsi</label>
              <textarea id="book-description" className="form-control" rows="3"
                value={description} onChange={(event) => setDescription(event.target.value)} required />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                <i className="fa-solid fa-plus me-2"></i>Tambah Buku
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h3 fw-bold mb-0">Semua Buku</h2>
          <span className="badge text-bg-primary">{books.length} buku</span>
        </div>
        <div className="row g-4">
          {books.map((book) => (
            <div className="col-sm-6 col-lg-4" key={book.id}>
              <article className="card h-100 shadow-sm">
                <img src={book.image} className="card-img-top book-image" alt={book.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="small text-secondary mb-2">{book.author} · {book.year}</p>
                  <p className="card-text">{book.description}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Book;
