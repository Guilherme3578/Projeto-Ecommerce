import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function LinguagensProgramacao() {
  const courses = [
    { title: "Python", level: "Avançado", duration: "80h", img: "/cursos/python.png", color: "python"},
    { title: "Java", level: "Básico", duration: "40h", img: "/cursos/java.png", color: "java"},
    { title: "C#", level: "Básico", duration: "40h", img: "/cursos/csharp.png", color: "csharp"},
    { title: "Ruby", level: "Básico", duration: "40h", img: "/cursos/ruby.png", color: "ruby"},
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