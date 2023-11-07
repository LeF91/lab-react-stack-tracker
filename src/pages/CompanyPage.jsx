import { React } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();
  const oneCompany = companies.find((company) => company.slug === companySlug);

  return (
    <>
      <h1>Company Profile</h1>

      <main className="companypage">
        <div className="company">
          <div className="company-image">
            <img src={oneCompany.logo} alt={oneCompany.name} />
          </div>
          <div className="company-info">
            <h2 className="company-name">{oneCompany.name}</h2>
            <a className="company-link" href={oneCompany.website}>
              About
            </a>
            <p className="company-description">{oneCompany.description}</p>
          </div>
        </div>
        <ul className="company-techs">
          {oneCompany.techStack.map((tech) => {
            return (
              <li key={tech.slug}>
                <Link
                  key={tech.slug}
                  to={`/tech/${tech.slug}?q=${companySlug}`}
                >
                  <p>
                    <img src={tech.image} alt={tech.name} />
                  </p>
                  <h4>{tech.name}</h4>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default CompanyPage;
