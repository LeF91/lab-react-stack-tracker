import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>

      <main className="homepage">
        {companies.map((company) => {
          return (
            <Link
              key={company.id}
              className="company-item"
              to={`/company/${company.slug}`}
            >
              <h3 className="company-name">{company.name}</h3>
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            </Link>
          );
        })}
      </main>
    </>
  );
}

export default HomePage;
