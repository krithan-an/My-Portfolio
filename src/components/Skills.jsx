import "./Skills.css";

import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiJupyter,
  SiGithub,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>

      <p className="section-subtitle">
        Technologies and tools I use to build scalable software, AI-powered
        applications, and data-driven solutions.
      </p>

      <div className="skills-grid">

        {/* Programming Languages */}
        <div className="skill-card">
          <h3>💻 Programming Languages</h3>

          <div className="skill-list">
            <div className="skill">
              <FaJava /> Java
            </div>

            <div className="skill">
              <FaPython /> Python
            </div>

            <div className="skill">
              <FaJsSquare /> JavaScript
            </div>

            <div className="skill">🗄️ SQL</div>

            <div className="skill">💻 C</div>
          </div>
        </div>

        {/* Full Stack */}
        <div className="skill-card">
          <h3>🌐 Full Stack Development</h3>

          <div className="skill-list">
            <div className="skill">
              <SiSpringboot /> Spring Boot
            </div>

            <div className="skill">
              <FaReact /> React
            </div>

            <div className="skill">
              <FaHtml5 /> HTML5
            </div>

            <div className="skill">
              <FaCss3Alt /> CSS3
            </div>

            <div className="skill">
              <SiMysql /> MySQL
            </div>

            <div className="skill">
              <SiPostgresql /> PostgreSQL
            </div>

            <div className="skill">
              <SiMongodb /> MongoDB
            </div>
          </div>
        </div>

        {/* AI & Machine Learning */}
        <div className="skill-card">
          <h3>🤖 AI & Machine Learning</h3>

          <div className="skill-list">
            <div className="skill">
              <SiTensorflow /> TensorFlow
            </div>

            <div className="skill">🧠 Keras</div>

            <div className="skill">👁️ OpenCV</div>

            <div className="skill">
              <SiPandas /> Pandas
            </div>

            <div className="skill">
              <SiNumpy /> NumPy
            </div>
          </div>
        </div>

        {/* Data Analytics */}
        <div className="skill-card">
          <h3>📊 Data Analytics</h3>

          <div className="skill-list">
            <div className="skill">📊 Power BI</div>

            <div className="skill">📈 Tableau</div>

            <div className="skill">📑 Excel</div>

            <div className="skill">
              <SiJupyter /> Jupyter Notebook
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>🛠 Tools & Platforms</h3>

          <div className="skill-list">
            <div className="skill">
              <FaGitAlt /> Git
            </div>

            <div className="skill">
              <SiGithub /> GitHub
            </div>

            <div className="skill">🚀 Streamlit</div>

            <div className="skill">💻 VS Code</div>

            <div className="skill">📬 Postman</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;