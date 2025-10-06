export default function Categories() {
  const categorias = [
    { nome: "Linguagens de programação", icon: "💻" },
    { nome: "Banco de dados", icon: "🗄️" },
    { nome: "Desenvolvimento web", icon: "⚙️" },
    { nome: "Informática", icon: "ℹ️" },
  ];

  return (
    <section className="categories">
      <h2>Categorias de Cursos</h2>
      <div className="category-list">
        {categorias.map((c, i) => (
          <div key={i} className="category-card">
            <span className="icon">{c.icon}</span>
            <p>{c.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
