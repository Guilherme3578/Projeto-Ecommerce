import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Informatica() {
  const courses = [
    { title: "PowerPoint", level: "Avançado", duration: "80h", img: "/cursos/powerpoint.png", color: "powerpoint" },
    { title: "Excel", level: "Básico", duration: "50h", img: "/cursos/excel.png", color: "excel" },
    { title: "PowerBI", level: "Básico", duration: "40h", img: "/cursos/powerbi.png", color: "powerbi" },
    { title: "Word", level: "Intermediário", duration: "60h", img: "/cursos/word.png", color: "word" },
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
        <Header />

      {/* Conteúdo principal */}
      <main className="main-content">
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className={`course-card ${course.color}`}>
              <img src={course.img} alt={course.title} />
              <div>
                <h2>{course.title}</h2>
                <p>Nível: {course.level}</p>
                <p>Duração: {course.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Rodapé */}
        <Footer />
    </div>
  );
}