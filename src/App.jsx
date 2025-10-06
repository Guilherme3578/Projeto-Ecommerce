import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import Advantages from "./components/Advantages";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-inner">
            <h1>Futuro em Tecnologia</h1>
            <p>Aprenda técnicas de programação, banco de dados e muito mais.</p>
            <nav>
            </nav>
            <SearchBar />
          </div>
        </section>

        <Categories />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}
