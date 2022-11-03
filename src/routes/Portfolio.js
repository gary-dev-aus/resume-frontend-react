import { Link } from "react-router-dom";
import Page from "../components/Page";
import { useQuery, gql } from "@apollo/client";

const PORTFOLIO = gql`
  query GetPortfolio {
    projects {
      data {
        id
        attributes {
          title
          slug
          isDesigner
          isDeveloper
        }
      }
    }
  }
`;

export default function Portfolio() {
  const { data, loading, error } = useQuery(PORTFOLIO);
  const projects = data && data.projects.data;

  return (
    <div>
      <Page title="portfolio" loading={loading} error={error}>
        <p>portfolio page contents</p>
        {projects &&
          projects.map((project) => (
            <div key={project.attributes.slug}>
              <Link
                to={`/portfolio/${project.attributes.slug}`}
                state={{ id: project.id }}
              >
                <h2>{project.attributes.title}</h2>
                {project.attributes.isDesigner && <p>designer</p>}
                {project.attributes.isDeveloper && <p>developer</p>}
              </Link>
            </div>
          ))}
      </Page>
    </div>
  );
}
