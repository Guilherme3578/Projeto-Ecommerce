import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function BancoDeDados() {
  const courses = [
    { title: "MySQL", level: "Avançado", duration: "80h", img: "/cursos/mysql.png", color: "mysql" },
    { title: "Oracle", level: "Básico", duration: "40h", img: "/cursos/oracle.png", color: "oracle" },
    { title: "PostgreSQL", level: "Básico", duration: "40h", img: "/cursos/postgre.png", color: "postgresql" },
    { title: "MongoDB", level: "Intermediário", duration: "60h", img: "/cursos/mongodb.png", color: "mongodb" },
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