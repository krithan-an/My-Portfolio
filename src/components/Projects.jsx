import "./Projects.css";

const projects = [
  {
    title: "LipNet – End-to-End Lip Reading System",

    description:
      "Developed a deep learning application that converts lip movements into text using computer vision and sequence modeling. Built modular preprocessing pipelines, optimized video processing, and deployed an interactive interface using Streamlit.",

    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Streamlit",
      "CNN",
      "LSTM",
      "CTC Loss",
      "Git",
    ],

    github: "https://github.com/krithan-an/my-Lipnet",
  },

  {
    title: "Sales Analysis Dashboard",

    description:
      "Designed an interactive Power BI dashboard to analyze sales performance, revenue trends, regional performance, and product profitability. Created DAX measures, KPIs, and data models to provide meaningful business insights.",

    technologies: [
      "Power BI",
      "DAX",
      "Excel",
      "Data Modeling",
      "Business Intelligence",
    ],

    github: "https://github.com/krithan-an/Sales-Analysis-Report",
  },

  {
    title: "Customer Behaviour Analysis",

    description:
      "Built an end-to-end data analytics solution by performing data cleaning, exploratory data analysis, SQL-based business analysis, and developing an interactive Power BI dashboard using Python and PostgreSQL.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "PostgreSQL",
      "SQL",
      "Power BI",
      "Jupyter Notebook",
    ],

    github: "https://github.com/krithan-an/Customer_Behviour_Analysis",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;