import "./Certificates.css";
import { FaCertificate, FaDownload } from "react-icons/fa";

const certificates = [
  {
    title: "AWS Machine Learning Engineer Associate",
    issuer: "Amazon Web Services",
    description:
      "Completed training covering machine learning concepts, model development, deployment and AWS AI services.",
    link: "/certificates/AWS ML Certificate.pdf",
    thumbnail: "/certificates_image/AWS Certificate.png",
  },
  {
    title: "MERN Stack Development",
    issuer: "Udemy",
    description:
      "Built modern full-stack applications using MongoDB, Express.js, React and Node.js.",
    link: "/certificates/Mern Stack.pdf",
    thumbnail: "/certificates_image/Mern Stack.png",
  },
  {
    title: "Tableau for Data Analytics",
    issuer: "Analytics Vidhya",
    description:
      "Created interactive dashboards and visualizations for business intelligence.",
    link: "/certificates/Tableau.pdf",
    thumbnail: "/certificates_image/Tableau.png",
  },
  {
    title: "MySQL Basics",
    issuer: "Great Learning",
    description:
      "Learned SQL queries, joins, indexing and relational database management.",
    link: "/certificates/SQL.pdf",
    thumbnail: "/certificates_image/SQL.png",
  },
  {
    title: "Analyzing Data with Power BI",
    issuer: "Analytics Vidhya",
    description:
      "Developed interactive Power BI dashboards and business reports.",
    link: "/certificates/Power BI.pdf",
    thumbnail: "/certificates_image/PowerBi.png",
  },
  {
    title: "Excel from Beginner to Expert",
    issuer: "Analytics Vidhya",
    description:
      "Advanced Excel including Pivot Tables, Charts, Lookups and Data Analysis.",
    link: "/certificates/Excel Certificate.pdf",
    thumbnail: "/certificates_image/Excel Certificate.png",
  },
  {
    title: "Generative AI with AWS",
    issuer: "Analytics Vidhya",
    description:
      "Explored Generative AI, LLMs and AI-powered applications using AWS.",
    link: "/certificates/genai-thumb.png",
    thumbnail: "/certificates_image/GenAI with AWS.png",
  },
];

function Certificates() {
  return (
    <section className="certificates" id="certifications">
      <h2>Certifications</h2>

      <p className="section-subtitle">
        Professional certifications that demonstrate my expertise in Software
        Development, Cloud Computing, Artificial Intelligence and Data Analytics.
      </p>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <FaCertificate className="certificate-icon" />

            <span className="issuer">{certificate.issuer}</span>

            <h3>{certificate.title}</h3>

            {/* ✅ SMALL PREVIEW ADDED HERE */}
            {certificate.thumbnail ? (
              <div className="certificate-thumb">
                <img
                  src={certificate.thumbnail}
                  alt={certificate.title}
                />
              </div>
            ) : (
              <div className="certificate-thumb placeholder">
                No Preview Available
              </div>
            )}

            <p>{certificate.description}</p>

            {certificate.link ? (
              <a
                href={certificate.link}
                download
                className="download-btn"
              >
                Download Certificate <FaDownload />
              </a>
            ) : (
              <button disabled>Credential Coming Soon</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;