import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function ProgramacaoWeb() {
  const courses = [
    { title: "HTML5", level: "Avançado", duration: "60h", img: "/cursos/html5.png", color: "html" },
    { title: "CSS3", level: "Básico", duration: "50h", img: "/cursos/css3.png", color: "css" },
    { title: "JavaScript", level: "Avançado", duration: "90h", img: "/cursos/javascript.png", color: "javascript" },
    { title: "React", level: "Básico", duration: "40h", img: "/cursos/react.png", color: "react" },
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