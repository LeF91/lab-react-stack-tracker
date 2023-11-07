import { useParams, useNavigate } from "react-router-dom";

import { useSearchParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const [searchParams] = useSearchParams();

  const previousCompany = searchParams.get("toto");
  console.log(previousCompany);
  const { techSlug } = useParams();
  const navigate = useNavigate();
  const theTechnology = technologies.find(
    (technologie) => technologie.slug === techSlug
  );
  return (
    <div>
      <h1>{theTechnology.name}</h1>
      <p>{theTechnology.description}</p>
      <img src={theTechnology.image} style={{ width: "5rem" }} alt="" />
      <div>
        <button
          onClick={() =>
            navigate(previousCompany ? `/company/${previousCompany}` : -1)
          }
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default TechnologyPage;
