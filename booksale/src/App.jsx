import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";

import booksData from "./Utils/books";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";

function App() {
  const [books, setBooks] = useState(booksData);

  return (
    <Routes>
      <Route element={<Layout books={books} setBooks={setBooks} />}>
        <Route index element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
