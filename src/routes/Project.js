import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Page from "../components/Page";

const PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      data {
        attributes {
          title
          details
        }
      }
    }
  }
`;

export default function Project() {
  const { slug } = useParams();
  const { id } = useLocation().state;
  const { data, loading, error } = useQuery(PROJECT, {
    variables: { id: id },
  });
  const project = data && data.project.data.attributes;

  return (
    <div>
      <Page
        title={project ? project.title : slug}
        loading={loading}
        error={error}
      >
        {project && (
          <>
            <p>{project.details}</p>
            <p>project page contents</p>
          </>
        )}
      </Page>
    </div>
  );
}
